import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Snow Details ID', name: 'snowDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['snowDetails'], operation: ['delete'] } }, default: 0 },
];
