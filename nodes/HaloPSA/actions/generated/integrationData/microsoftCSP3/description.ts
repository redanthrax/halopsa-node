import { INodeProperties } from 'n8n-workflow';

export const microsoftCSP3Description: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['microsoftCSP3'] } }, default: {} },
];
