import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Organisation ID', name: 'organisationId', type: 'number', required: true,
		displayOptions: { show: { resource: ['organisation'], operation: ['getById'] } }, default: 0 },
];
