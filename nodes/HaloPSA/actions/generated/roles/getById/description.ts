import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Roles ID', name: 'roleId', type: 'number', required: true,
		displayOptions: { show: { resource: ['roles'], operation: ['getById'] } }, default: 0 },
];
