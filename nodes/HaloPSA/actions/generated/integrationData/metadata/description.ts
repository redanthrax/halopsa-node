import { INodeProperties } from 'n8n-workflow';

export const metadataDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['metadata'] } }, default: {} },
];
