import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Wordpress Details ID', name: 'wordpressDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['wordpressDetails'], operation: ['getById'] } }, default: 0 },
];
