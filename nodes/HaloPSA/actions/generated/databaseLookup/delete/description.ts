import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Database Lookup ID', name: 'databaseLookupId', type: 'number', required: true,
		displayOptions: { show: { resource: ['databaseLookup'], operation: ['delete'] } }, default: 0 },
];
