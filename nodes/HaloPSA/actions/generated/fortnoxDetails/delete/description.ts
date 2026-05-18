import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Fortnox Details ID', name: 'fortnoxDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['fortnoxDetails'], operation: ['delete'] } }, default: 0 },
];
