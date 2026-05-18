import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'azureadconnection ID', name: 'azureadconnectionId', type: 'number', required: true,
		displayOptions: { show: { resource: ['azureadconnection'], operation: ['getById'] } }, default: 0 },
];
