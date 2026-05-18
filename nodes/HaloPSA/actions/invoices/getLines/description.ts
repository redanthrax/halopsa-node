import { INodeProperties } from 'n8n-workflow';

export const getLinesDescription: INodeProperties[] = [
	{
		displayName: 'No Parameters',
		name: 'notice',
		type: 'notice',
		displayOptions: { show: { resource: ['invoices'], operation: ['getLines'] } },
		default: '',
		description: 'Returns invoice line data from GET /Invoice/lines',
	},
];
