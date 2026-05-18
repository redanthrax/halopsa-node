import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Addigy Details ID', name: 'addigyDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['addigyDetails'], operation: ['delete'] } }, default: 0 },
];
