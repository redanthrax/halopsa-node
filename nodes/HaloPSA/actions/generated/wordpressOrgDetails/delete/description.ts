import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Wordpress Org Details ID', name: 'wordpressOrgDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['wordpressOrgDetails'], operation: ['delete'] } }, default: 0 },
];
