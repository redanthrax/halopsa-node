import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Password Field ID', name: 'passwordFieldId', type: 'number', required: true,
		displayOptions: { show: { resource: ['passwordField'], operation: ['getById'] } }, default: 0 },
];
