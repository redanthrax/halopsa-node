import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'View List Group ID', name: 'viewListGroupId', type: 'number', required: true,
		displayOptions: { show: { resource: ['viewListGroup'], operation: ['getById'] } }, default: 0 },
];
