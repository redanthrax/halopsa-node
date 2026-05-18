import { INodeProperties } from 'n8n-workflow';

export const snelStartDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['snelStart'] } }, default: {} },
];
