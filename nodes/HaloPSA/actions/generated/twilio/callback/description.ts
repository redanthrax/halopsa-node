import { INodeProperties } from 'n8n-workflow';

export const callbackDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['twilio'], operation: ['callback'] } }, default: {} },
];
