import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Audit ID', name: 'auditId', type: 'number', required: true,
		displayOptions: { show: { resource: ['audit'], operation: ['delete'] } }, default: 0 },
];
