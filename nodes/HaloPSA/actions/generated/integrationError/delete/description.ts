import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Integration Error ID', name: 'integrationErrorId', type: 'number', required: true,
		displayOptions: { show: { resource: ['integrationError'], operation: ['delete'] } }, default: 0 },
];
