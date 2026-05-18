import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Integration Field Data ID', name: 'integrationFieldDataId', type: 'number', required: true,
		displayOptions: { show: { resource: ['integrationFieldData'], operation: ['getById'] } }, default: 0 },
];
