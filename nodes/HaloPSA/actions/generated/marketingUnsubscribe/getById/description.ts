import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Marketing Unsubscribe ID', name: 'marketingUnsubscribeId', type: 'number', required: true,
		displayOptions: { show: { resource: ['marketingUnsubscribe'], operation: ['getById'] } }, default: 0 },
];
