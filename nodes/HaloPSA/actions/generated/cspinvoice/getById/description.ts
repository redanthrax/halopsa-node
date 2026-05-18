import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'cspinvoice ID', name: 'cspinvoiceId', type: 'number', required: true,
		displayOptions: { show: { resource: ['cspinvoice'], operation: ['getById'] } }, default: 0 },
];
