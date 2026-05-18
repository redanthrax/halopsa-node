import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Avalara Details ID', name: 'avalaraDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['avalaraDetails'], operation: ['delete'] } }, default: 0 },
];
