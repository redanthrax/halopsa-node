import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Field ID', name: 'fieldId', type: 'number', required: true,
		displayOptions: { show: { resource: ['field'], operation: ['getById'] } }, default: 0 },
];
