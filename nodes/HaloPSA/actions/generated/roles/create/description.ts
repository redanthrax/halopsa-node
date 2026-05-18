import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['roles'], operation: ['create'] } }, default: {},
		description: 'Object or array for POST /Roles' },
];
