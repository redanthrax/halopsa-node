import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Snipe ITDetails ID', name: 'snipeITDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['snipeITDetails'], operation: ['getById'] } }, default: 0 },
];
