import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Tax ID', name: 'taxId', type: 'number', required: true,
		displayOptions: { show: { resource: ['tax'], operation: ['getById'] } }, default: 0 },
];
