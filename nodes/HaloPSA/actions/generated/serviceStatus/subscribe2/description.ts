import { INodeProperties } from 'n8n-workflow';

export const subscribe2Description: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['serviceStatus'], operation: ['subscribe2'] } }, default: {} },
];
