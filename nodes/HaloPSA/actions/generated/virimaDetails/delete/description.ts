import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Virima Details ID', name: 'virimaDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['virimaDetails'], operation: ['delete'] } }, default: 0 },
];
