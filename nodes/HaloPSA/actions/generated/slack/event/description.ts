import { INodeProperties } from 'n8n-workflow';

export const eventDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['slack'], operation: ['event'] } }, default: {} },
];
