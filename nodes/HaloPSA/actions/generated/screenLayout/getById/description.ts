import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Screen Layout ID', name: 'screenLayoutId', type: 'number', required: true,
		displayOptions: { show: { resource: ['screenLayout'], operation: ['getById'] } }, default: 0 },
];
