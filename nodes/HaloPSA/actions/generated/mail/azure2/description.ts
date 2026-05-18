import { INodeProperties } from 'n8n-workflow';

export const azure2Description: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['mail'], operation: ['azure2'] } }, default: {} },
];
