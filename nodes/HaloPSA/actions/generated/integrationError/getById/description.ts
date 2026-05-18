import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Integration Error ID', name: 'integrationErrorId', type: 'number', required: true,
		displayOptions: { show: { resource: ['integrationError'], operation: ['getById'] } }, default: 0 },
];
