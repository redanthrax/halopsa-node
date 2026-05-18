import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Billing Template ID', name: 'billingTemplateId', type: 'number', required: true,
		displayOptions: { show: { resource: ['billingTemplate'], operation: ['getById'] } }, default: 0 },
];
