import { INodeProperties } from 'n8n-workflow';

export const processMailDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['mail'], operation: ['processMail'] } }, default: {} },
];
