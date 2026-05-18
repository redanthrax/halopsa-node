import { INodeProperties } from 'n8n-workflow';

export const updateDescription: INodeProperties[] = [
	{
		displayName: 'Quotation ID',
		name: 'quotationId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['quotations'], operation: ['update'] } },
		default: 0,
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'json',
		displayOptions: { show: { resource: ['quotations'], operation: ['update'] } },
		default: {},
		description: 'Fields to update on the quotation',
	},
];
