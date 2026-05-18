import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Tabs ID', name: 'tabId', type: 'number', required: true,
		displayOptions: { show: { resource: ['tabs'], operation: ['delete'] } }, default: 0 },
];
