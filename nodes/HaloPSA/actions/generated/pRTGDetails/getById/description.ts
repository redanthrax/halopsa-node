import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'PRTGDetails ID', name: 'pRTGDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['pRTGDetails'], operation: ['getById'] } }, default: 0 },
];
