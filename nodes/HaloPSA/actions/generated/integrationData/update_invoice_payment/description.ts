import { INodeProperties } from 'n8n-workflow';

export const update_invoice_paymentDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['update_invoice_payment'] } }, default: {} },
];
