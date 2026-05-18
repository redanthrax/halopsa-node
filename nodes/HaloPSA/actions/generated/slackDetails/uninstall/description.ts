import { INodeProperties } from 'n8n-workflow';

export const uninstallDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['slackDetails'], operation: ['uninstall'] } }, default: {} },
];
