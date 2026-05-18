import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Database Lookup Confirmation ID', name: 'databaseLookupConfirmationId', type: 'number', required: true,
		displayOptions: { show: { resource: ['databaseLookupConfirmation'], operation: ['getById'] } }, default: 0 },
];
