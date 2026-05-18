import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Wordpress Org Details ID', name: 'wordpressOrgDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['wordpressOrgDetails'], operation: ['getById'] } }, default: 0 },
];
