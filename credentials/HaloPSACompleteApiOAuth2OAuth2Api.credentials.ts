import {
	ICredentialType,
	INodeProperties,
	Icon,
} from 'n8n-workflow';

export class HaloPSACompleteApiOAuth2OAuth2Api implements ICredentialType {
	name = 'haloPSACompleteApiOAuth2OAuth2Api';
	displayName = 'HaloPSA Complete API OAuth2 API';
	extends = ['oAuth2Api'];
	documentationUrl = 'https://github.com/redanthrax/halopsa-node';
	icon = 'file:../nodes/HaloPSA/halopsa.svg' as Icon;
	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'clientCredentials',
		},
		{
			displayName: 'Base API URL',
			name: 'baseUrl',
			type: 'string',
			default: '',
			placeholder: 'https://your-domain.halopsa.com',
			required: true,
			description: 'The base URL of your HaloPSA instance',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'https://your-domain.halopsa.com/auth/token',
			description: 'The OAuth2 token endpoint URL',
		},
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
			required: true,
			description: 'OAuth 2.0 Client ID',
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description: 'OAuth 2.0 Client Secret',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'string',
			default: 'all',
			description: 'OAuth 2.0 scope. Use "all" for full API access',
		},
	];
}
