import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Lookup Record ID',
		name: 'lookupRecordId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['lookups'], operation: ['delete'] } },
		default: 0,
	},
];
