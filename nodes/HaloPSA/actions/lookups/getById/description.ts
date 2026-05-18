import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Lookup Record ID',
		name: 'lookupRecordId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['lookups'], operation: ['getById'] } },
		default: 0,
	},
];
