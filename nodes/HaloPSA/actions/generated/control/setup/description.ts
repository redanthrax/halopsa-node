import { INodeProperties } from 'n8n-workflow';

export const setupDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['control'], operation: ['setup'] } }, default: {} },
];
