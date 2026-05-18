import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Setup Tab Group ID', name: 'setupTabGroupId', type: 'number', required: true,
		displayOptions: { show: { resource: ['setupTabGroup'], operation: ['getById'] } }, default: 0 },
];
