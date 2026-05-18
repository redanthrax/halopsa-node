import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'LDAPConnection ID', name: 'lDAPConnectionId', type: 'number', required: true,
		displayOptions: { show: { resource: ['lDAPConnection'], operation: ['getById'] } }, default: 0 },
];
