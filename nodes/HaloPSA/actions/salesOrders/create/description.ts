import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'number',
		displayOptions: { show: { resource: ['salesOrders'], operation: ['create'] } },
		default: 0,
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'json',
		displayOptions: { show: { resource: ['salesOrders'], operation: ['create'] } },
		default: {},
		description: 'SalesOrderHeader fields as JSON (summary, status, lines, etc.)',
	},
];
