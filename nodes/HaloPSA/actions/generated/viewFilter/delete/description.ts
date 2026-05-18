import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'View Filter ID', name: 'viewFilterId', type: 'number', required: true,
		displayOptions: { show: { resource: ['viewFilter'], operation: ['delete'] } }, default: 0 },
];
