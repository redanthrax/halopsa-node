import { INodeProperties } from 'n8n-workflow';

export const addLinesDescription: INodeProperties[] = [
	{
		displayName: 'Quotation Lines',
		name: 'quotationLines',
		type: 'json',
		displayOptions: { show: { resource: ['quotations'], operation: ['addLines'] } },
		default: '[]',
		required: true,
		description: 'Array of quotation line objects (QuotationDetail schema)',
	},
];
