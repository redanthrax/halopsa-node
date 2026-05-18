import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Snipe ITDetails ID', name: 'snipeITDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['snipeITDetails'], operation: ['delete'] } }, default: 0 },
];
