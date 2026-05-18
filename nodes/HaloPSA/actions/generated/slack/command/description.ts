import { INodeProperties } from 'n8n-workflow';

export const commandDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['slack'], operation: ['command'] } }, default: {} },
];
