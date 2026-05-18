import { INodeProperties } from 'n8n-workflow';

export const postDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['addigy'], operation: ['post'] } }, default: {} },
];
