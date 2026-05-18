import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Roles ID', name: 'roleId', type: 'number', required: true,
		displayOptions: { show: { resource: ['roles'], operation: ['delete'] } }, default: 0 },
];
