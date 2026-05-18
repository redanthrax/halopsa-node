import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Client Prepay ID', name: 'clientPrepayId', type: 'number', required: true,
		displayOptions: { show: { resource: ['clientPrepay'], operation: ['getById'] } }, default: 0 },
];
