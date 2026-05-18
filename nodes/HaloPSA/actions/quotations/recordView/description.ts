import { INodeProperties } from 'n8n-workflow';

export const recordViewDescription: INodeProperties[] = [
	{
		displayName: 'Quotation ID',
		name: 'quotationId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['quotations'], operation: ['recordView'] } },
		default: 0,
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'json',
		displayOptions: { show: { resource: ['quotations'], operation: ['recordView'] } },
		default: {},
		description: 'Additional JSON fields sent in the request body (merged with record ID)',
	},
];
