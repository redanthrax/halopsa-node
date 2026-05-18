import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Tenable Details ID', name: 'tenableDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['tenableDetails'], operation: ['getById'] } }, default: 0 },
];
