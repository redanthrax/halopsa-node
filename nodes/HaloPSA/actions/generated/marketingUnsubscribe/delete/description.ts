import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Marketing Unsubscribe ID', name: 'marketingUnsubscribeId', type: 'number', required: true,
		displayOptions: { show: { resource: ['marketingUnsubscribe'], operation: ['delete'] } }, default: 0 },
];
