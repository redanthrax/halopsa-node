import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Wordpress Details ID', name: 'wordpressDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['wordpressDetails'], operation: ['delete'] } }, default: 0 },
];
