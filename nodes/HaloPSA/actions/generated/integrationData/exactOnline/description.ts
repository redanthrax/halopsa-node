import { INodeProperties } from 'n8n-workflow';

export const exactOnlineDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['exactOnline'] } }, default: {} },
];
