import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'azureadconnection ID', name: 'azureadconnectionId', type: 'number', required: true,
		displayOptions: { show: { resource: ['azureadconnection'], operation: ['delete'] } }, default: 0 },
];
