import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Twilio Whats App Details ID', name: 'twilioWhatsAppDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['twilioWhatsAppDetails'], operation: ['delete'] } }, default: 0 },
];
