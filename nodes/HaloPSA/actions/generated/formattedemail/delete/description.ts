import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'formattedemail ID', name: 'formattedemailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['formattedemail'], operation: ['delete'] } }, default: 0 },
];
