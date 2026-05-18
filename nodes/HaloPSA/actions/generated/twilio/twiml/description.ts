import { INodeProperties } from 'n8n-workflow';

export const twimlDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['twilio'], operation: ['twiml'] } }, default: {} },
];
