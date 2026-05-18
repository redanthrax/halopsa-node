import { INodeProperties } from 'n8n-workflow';

export const sageBusinessCloudDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['sageBusinessCloud'] } }, default: {} },
];
