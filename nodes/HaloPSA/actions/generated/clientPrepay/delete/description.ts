import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Client Prepay ID', name: 'clientPrepayId', type: 'number', required: true,
		displayOptions: { show: { resource: ['clientPrepay'], operation: ['delete'] } }, default: 0 },
];
