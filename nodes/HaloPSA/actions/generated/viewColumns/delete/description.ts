import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'View Columns ID', name: 'viewColumnId', type: 'number', required: true,
		displayOptions: { show: { resource: ['viewColumns'], operation: ['delete'] } }, default: 0 },
];
