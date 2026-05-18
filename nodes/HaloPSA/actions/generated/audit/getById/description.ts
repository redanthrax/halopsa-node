import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Audit ID', name: 'auditId', type: 'number', required: true,
		displayOptions: { show: { resource: ['audit'], operation: ['getById'] } }, default: 0 },
];
