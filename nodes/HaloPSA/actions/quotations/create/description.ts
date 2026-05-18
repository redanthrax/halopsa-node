import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'number',
		displayOptions: { show: { resource: ['quotations'], operation: ['create'] } },
		default: 0,
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'json',
		displayOptions: { show: { resource: ['quotations'], operation: ['create'] } },
		default: {},
		description: 'QuotationHeader fields as JSON (summary, status, lines, etc.)',
	},
];
