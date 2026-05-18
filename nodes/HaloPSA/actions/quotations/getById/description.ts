import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Quotation ID',
		name: 'quotationId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['quotations'], operation: ['getById'] } },
		default: 0,
	},
];
