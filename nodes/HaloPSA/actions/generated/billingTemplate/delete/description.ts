import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Billing Template ID', name: 'billingTemplateId', type: 'number', required: true,
		displayOptions: { show: { resource: ['billingTemplate'], operation: ['delete'] } }, default: 0 },
];
