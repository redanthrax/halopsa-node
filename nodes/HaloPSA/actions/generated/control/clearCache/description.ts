import { INodeProperties } from 'n8n-workflow';

export const clearCacheDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['control'], operation: ['clearCache'] } }, default: {} },
];
