import { INodeProperties } from 'n8n-workflow';

export const runDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['databaseLookup'], operation: ['run'] } }, default: {} },
];
