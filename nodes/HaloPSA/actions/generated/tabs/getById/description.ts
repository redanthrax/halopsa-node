import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Tabs ID', name: 'tabId', type: 'number', required: true,
		displayOptions: { show: { resource: ['tabs'], operation: ['getById'] } }, default: 0 },
];
