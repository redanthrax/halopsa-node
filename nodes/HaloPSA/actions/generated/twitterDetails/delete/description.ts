import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Twitter Details ID', name: 'twitterDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['twitterDetails'], operation: ['delete'] } }, default: 0 },
];
