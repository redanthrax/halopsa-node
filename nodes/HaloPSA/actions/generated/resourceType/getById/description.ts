import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Resource Type ID', name: 'resourceTypeId', type: 'number', required: true,
		displayOptions: { show: { resource: ['resourceType'], operation: ['getById'] } }, default: 0 },
];
