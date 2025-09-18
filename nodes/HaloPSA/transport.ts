import {
	GenericValue,
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
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
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
): Promise<string> {
	const creds = await this.getCredentials('haloPSAApi');
	
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
	const creds = await this.getCredentials('haloPSAApi');
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
		return await this.helpers.request(options);
	} catch (error) {
		if (error.statusCode === 401) {
			throw new NodeApiError(this.getNode(), error, {
				message: 'Authentication failed - check your client credentials',
			});
		}
		throw new NodeApiError(this.getNode(), error);
	}
}