import { INodeProperties } from 'n8n-workflow';

export const updateLinesDescription: INodeProperties[] = [
	{
		displayName: 'Invoice Lines',
		name: 'invoiceLines',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['invoices'],
				operation: ['updateLines'],
			},
		},
		default: '[]',
		required: true,
		description: 'Array of invoice line objects to update',
	placeholder: '[{"ID": 1, "ihid": 43, "item_shortdescription": "Updated item", "qty_order": 2, "unit_price": 100}]',
	},
];