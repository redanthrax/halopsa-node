import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'User Roles ID', name: 'userRoleId', type: 'number', required: true,
		displayOptions: { show: { resource: ['userRoles'], operation: ['getById'] } }, default: 0 },
];
