import {
	GenericValue,
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	IWebhookFunctions,
	IHttpRequestMethods,
	IHttpRequestOptions,
	ILoadOptionsFunctions,
	NodeApiError,
} from 'n8n-workflow';
import { extractResourceList } from './resourceList';
import {
	clearCachedAccessToken,
	getCachedAccessToken,
	getTokenCacheKey,
	setCachedAccessToken,
} from './tokenCache';

interface TokenResponse {
	access_token: string;
	token_type: string;
	expires_in: number;
}

type HaloRequestContext =
	| IHookFunctions
	| IExecuteFunctions
	| ILoadOptionsFunctions
	| IWebhookFunctions;

export async function getAccessToken(
	this: HaloRequestContext,
	forceRefresh = false,
): Promise<string> {
	const creds = await this.getCredentials('haloPSACompleteApiOAuth2OAuth2Api');
	const baseUrl = creds.baseUrl as string;
	const clientId = creds.clientId as string;
	const cacheKey = getTokenCacheKey(baseUrl, clientId);

	if (!forceRefresh) {
		const cached = getCachedAccessToken(cacheKey);
		if (cached) {
			return cached;
		}
	} else {
		clearCachedAccessToken(cacheKey);
	}

	return requestAccessToken(this, cacheKey, {
		baseUrl: creds.baseUrl as string,
		clientId: creds.clientId as string,
		clientSecret: creds.clientSecret as string,
		scope: (creds.scope as string) || 'all',
	});
}

async function requestAccessToken(
	ctx: HaloRequestContext,
	cacheKey: string,
	creds: {
		baseUrl: string;
		clientId: string;
		clientSecret: string;
		scope: string;
	},
): Promise<string> {
	const formData = new URLSearchParams();
	formData.append('grant_type', 'client_credentials');
	formData.append('client_id', creds.clientId);
	formData.append('client_secret', creds.clientSecret);
	formData.append('scope', creds.scope);

	const tokenOptions: IHttpRequestOptions = {
		method: 'POST',
		url: `${creds.baseUrl}/auth/token`,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: formData.toString(),
		json: false,
	};

	try {
		const tokenResponse = await ctx.helpers.httpRequest(tokenOptions);
		let parsedResponse: TokenResponse;
		if (typeof tokenResponse === 'string') {
			parsedResponse = JSON.parse(tokenResponse);
		} else {
			parsedResponse = tokenResponse as TokenResponse;
		}
		setCachedAccessToken(cacheKey, parsedResponse.access_token, parsedResponse.expires_in);
		return parsedResponse.access_token;
	} catch (error) {
		throw new NodeApiError(ctx.getNode(), error, {
			message: 'Failed to obtain access token from HaloPSA',
		});
	}
}

async function performApiRequest(
	ctx: HaloRequestContext,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject | GenericValue | GenericValue[],
	qs: IDataObject,
	accessToken: string,
): Promise<any> {
	const creds = await ctx.getCredentials('haloPSACompleteApiOAuth2OAuth2Api');

	const options: IHttpRequestOptions = {
		method,
		body,
		qs,
		url: `${creds.baseUrl}/api${endpoint}`,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${accessToken}`,
		},
		json: true,
	};

	return ctx.helpers.httpRequest(options);
}

function getHttpStatusCode(error: unknown): number {
	const err = error as {
		status?: number;
		statusCode?: number;
		httpCode?: string;
	};
	return err?.status || err?.statusCode || parseInt(err?.httpCode as string, 10) || 0;
}

export async function apiRequest(
	this: HaloRequestContext,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject | GenericValue | GenericValue[] = {},
	qs: IDataObject = {},
): Promise<any> {
	let accessToken = await getAccessToken.call(this);
	let retriedAfter401 = false;

	try {
		return await performApiRequest(this, method, endpoint, body, qs, accessToken);
	} catch (error) {
		const statusCode = getHttpStatusCode(error);

		if (statusCode === 401 && !retriedAfter401) {
			retriedAfter401 = true;
			accessToken = await getAccessToken.call(this, true);
			try {
				return await performApiRequest(this, method, endpoint, body, qs, accessToken);
			} catch (retryError) {
				error = retryError;
			}
		}

		const finalStatus = getHttpStatusCode(error);
		if (finalStatus === 401) {
			throw new NodeApiError(this.getNode(), error, {
				message: 'Authentication failed - check your client credentials',
			});
		}
		if (finalStatus === 400) {
			const err = error as {
				response?: { data?: unknown; body?: unknown };
				error?: unknown;
			};
			let errorText = '';

			if (err.response?.data) {
				if (typeof err.response.data === 'string') {
					errorText = err.response.data.trim();
				}
			}
			if (!errorText && err.error) {
				if (typeof err.error === 'string') {
					errorText = err.error.trim();
				} else if (typeof err.error === 'object') {
					errorText = JSON.stringify(err.error);
				}
			}
			if (!errorText && err.response?.body) {
				if (typeof err.response.body === 'string') {
					errorText = err.response.body.trim();
				}
			}

			const message = errorText ? `Bad request - ${errorText}` : 'Bad request - please check your parameters';

			throw new NodeApiError(this.getNode(), error, {
				message,
			});
		}
		throw new NodeApiError(this.getNode(), error);
	}
}

export async function apiRequestAllItems(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions | IWebhookFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	resourceKey: string,
	body: IDataObject | GenericValue | GenericValue[] = {},
	qs: IDataObject = {},
): Promise<any[]> {
	const allItems: any[] = [];
	const pageSize = 1000; // Maximum page size for HaloPSA
	let page = 1;
	let hasMorePages = true;

	while (hasMorePages) {
		// Set pagination parameters
		const paginatedQs = {
			...qs,
			count: pageSize,
			pageinate: true,
			page_no: page,
		};

		const response = await apiRequest.call(this, method, endpoint, body, paginatedQs);
		
		const items = extractResourceList(response, resourceKey);
		allItems.push(...items);

		// Check if there are more pages
		// If we got fewer items than the page size, we've reached the end
		hasMorePages = items.length === pageSize;
		page++;

	}

	return allItems;
}
