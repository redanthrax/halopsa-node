import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Database Lookup ID', name: 'databaseLookupId', type: 'number', required: true,
		displayOptions: { show: { resource: ['databaseLookup'], operation: ['getById'] } }, default: 0 },
];
