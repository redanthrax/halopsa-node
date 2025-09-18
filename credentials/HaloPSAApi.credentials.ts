import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class HaloPSAApi implements ICredentialType {
	name = 'haloPSAApi';
	displayName = 'HaloPSA API';
	documentationUrl = 'https://github.com/redanthrax/halopsa-node';
	properties: INodeProperties[] = [
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
