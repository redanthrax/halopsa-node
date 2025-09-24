import {
	GenericValue,
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
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
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
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
		const tokenResponse = await this.helpers.request(tokenOptions);
		const parsedResponse: TokenResponse = JSON.parse(tokenResponse);
		return parsedResponse.access_token;
	} catch (error) {
		throw new NodeApiError(this.getNode(), error, {
			message: 'Failed to obtain access token from HaloPSA',
		});
	}
}

export async function apiRequest(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
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
		const response = await this.helpers.request(options);
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