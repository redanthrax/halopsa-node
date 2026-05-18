import { INodeProperties } from 'n8n-workflow';

export const interactivityDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['slack'], operation: ['interactivity'] } }, default: {} },
];
