import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'PRTGDetails ID', name: 'pRTGDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['pRTGDetails'], operation: ['delete'] } }, default: 0 },
];
