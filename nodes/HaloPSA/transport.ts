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
	LoggerProxy as Logger,
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

	Logger.debug('HaloPSA API Request initiated', {
		url: options.url,
		method: options.method,
		queryParams: options.qs,
		body: options.body,
		node: this.getNode().name,
	});

	try {
		const response = await this.helpers.httpRequest(options);
		Logger.debug('HaloPSA API Response received', {
			url: options.url,
			responseType: typeof response,
			responseKeys: response && typeof response === 'object' ? Object.keys(response) : 'N/A',
			recordCount: response && typeof response === 'object' ? response.record_count : undefined,
			node: this.getNode().name,
		});
		return response;
	} catch (error) {
		if (error.statusCode === 401) {
			throw new NodeApiError(this.getNode(), error, {
				message: 'Authentication failed - check your client credentials',
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

		Logger.debug(`HaloPSA Paginated Request - Page ${page}`, {
			endpoint,
			pageSize,
			node: this.getNode().name,
		});

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

		Logger.debug(`HaloPSA Paginated Response - Page ${page - 1}`, {
			itemsReceived: items.length,
			totalItemsSoFar: allItems.length,
			hasMorePages,
			node: this.getNode().name,
		});
	}

	Logger.debug('HaloPSA Pagination Complete', {
		totalItems: allItems.length,
		totalPages: page - 1,
		node: this.getNode().name,
	});

	return allItems;
}
