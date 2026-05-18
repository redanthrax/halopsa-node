import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Field Group ID', name: 'fieldGroupId', type: 'number', required: true,
		displayOptions: { show: { resource: ['fieldGroup'], operation: ['getById'] } }, default: 0 },
];
