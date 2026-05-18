import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'User Roles ID', name: 'userRoleId', type: 'number', required: true,
		displayOptions: { show: { resource: ['userRoles'], operation: ['delete'] } }, default: 0 },
];
