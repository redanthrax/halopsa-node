import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Screen Layout ID', name: 'screenLayoutId', type: 'number', required: true,
		displayOptions: { show: { resource: ['screenLayout'], operation: ['delete'] } }, default: 0 },
];
