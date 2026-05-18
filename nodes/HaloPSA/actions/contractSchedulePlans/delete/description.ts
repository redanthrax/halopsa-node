import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Plan ID', name: 'planId', type: 'number', required: true,
		displayOptions: { show: { resource: ['contractSchedulePlans'], operation: ['delete'] } }, default: 0 },
];
