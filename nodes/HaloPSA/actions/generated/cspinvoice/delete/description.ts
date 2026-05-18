import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'cspinvoice ID', name: 'cspinvoiceId', type: 'number', required: true,
		displayOptions: { show: { resource: ['cspinvoice'], operation: ['delete'] } }, default: 0 },
];
