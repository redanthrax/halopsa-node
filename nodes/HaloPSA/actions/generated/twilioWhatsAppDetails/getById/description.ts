import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Twilio Whats App Details ID', name: 'twilioWhatsAppDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['twilioWhatsAppDetails'], operation: ['getById'] } }, default: 0 },
];
