import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Xero Details ID', name: 'xeroDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['xeroDetails'], operation: ['getById'] } }, default: 0 },
];
