import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Quotation ID',
		name: 'quotationId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['quotations'], operation: ['delete'] } },
		default: 0,
	},
];
