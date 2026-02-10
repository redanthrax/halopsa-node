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

interface TokenResponse {
	access_token: string;
	token_type: string;
	expires_in: number;
}

export async function getAccessToken(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions | IWebhookFunctions,
): Promise<string> {
	const creds = await this.getCredentials('haloPSACompleteApiOAuth2OAuth2Api');
	
	const formData = new URLSearchParams();
	formData.append('grant_type', 'client_credentials');
	formData.append('client_id', creds.clientId as string);
	formData.append('client_secret', creds.clientSecret as string);
	formData.append('scope', (creds.scope as string) || 'all');

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
		const tokenResponse = await this.helpers.httpRequest(tokenOptions);
		let parsedResponse: TokenResponse;
		if (typeof tokenResponse === 'string') {
			parsedResponse = JSON.parse(tokenResponse);
		} else {
			parsedResponse = tokenResponse as TokenResponse;
		}
		return parsedResponse.access_token;
	} catch (error) {
		throw new NodeApiError(this.getNode(), error, {
			message: 'Failed to obtain access token from HaloPSA',
		});
	}
}

export async function apiRequest(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions | IWebhookFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject | GenericValue | GenericValue[] = {},
	qs: IDataObject = {},
) {
	const creds = await this.getCredentials('haloPSACompleteApiOAuth2OAuth2Api');
	const accessToken = await getAccessToken.call(this);

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



	try {
		let response: any;
		try {
			response = await this.helpers.httpRequest(options);
		} catch (httpError) {
			// Capture the raw HTTP error before n8n wraps it
			throw httpError;
		}
		return response;
	} catch (error) {
		const statusCode = error?.status || error?.statusCode || parseInt(error?.httpCode as string, 10) || 0;
		if (statusCode === 401) {
			throw new NodeApiError(this.getNode(), error, {
				message: 'Authentication failed - check your client credentials',
			});
		}
		if (statusCode === 400) {
			let errorText = '';
			
			// Check response.data first (this is where HaloPSA puts validation errors)
			if (error.response?.data) {
				if (typeof error.response.data === 'string') {
					errorText = error.response.data.trim();
				}
			}
			// Fallback: check error.error
			if (!errorText && error.error) {
				if (typeof error.error === 'string') {
					errorText = error.error.trim();
				} else if (typeof error.error === 'object') {
					errorText = JSON.stringify(error.error);
				}
			}
			// Fallback: check response.body
			if (!errorText && error.response?.body) {
				if (typeof error.response.body === 'string') {
					errorText = error.response.body.trim();
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
		
		// Extract items from response
		let items: any[];
		if (resourceKey === '' || !resourceKey) {
			// API returns array directly
			items = Array.isArray(response) ? response : [];
		} else {
			// API returns object with resource key
			items = response[resourceKey] || [];
		}
		allItems.push(...items);

		// Check if there are more pages
		// If we got fewer items than the page size, we've reached the end
		hasMorePages = items.length === pageSize;
		page++;

	}

	return allItems;
}
