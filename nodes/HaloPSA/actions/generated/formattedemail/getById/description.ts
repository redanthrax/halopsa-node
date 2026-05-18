import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'formattedemail ID', name: 'formattedemailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['formattedemail'], operation: ['getById'] } }, default: 0 },
];
