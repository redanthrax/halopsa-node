import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'FAQLists ID', name: 'fAQListId', type: 'number', required: true,
		displayOptions: { show: { resource: ['fAQLists'], operation: ['delete'] } }, default: 0 },
];
