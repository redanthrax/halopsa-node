import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Setup Tab ID', name: 'setupTabId', type: 'number', required: true,
		displayOptions: { show: { resource: ['setupTab'], operation: ['getById'] } }, default: 0 },
];
