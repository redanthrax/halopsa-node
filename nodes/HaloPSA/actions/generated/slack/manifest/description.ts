import { INodeProperties } from 'n8n-workflow';

export const manifestDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['slack'], operation: ['manifest'] } }, default: {} },
];
