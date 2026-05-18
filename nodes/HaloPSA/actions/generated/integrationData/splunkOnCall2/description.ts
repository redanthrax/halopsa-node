import { INodeProperties } from 'n8n-workflow';

export const splunkOnCall2Description: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['splunkOnCall2'] } }, default: {} },
];
