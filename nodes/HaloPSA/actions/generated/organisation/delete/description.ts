import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Organisation ID', name: 'organisationId', type: 'number', required: true,
		displayOptions: { show: { resource: ['organisation'], operation: ['delete'] } }, default: 0 },
];
