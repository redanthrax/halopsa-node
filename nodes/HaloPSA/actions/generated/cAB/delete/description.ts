import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'CAB ID', name: 'cABId', type: 'number', required: true,
		displayOptions: { show: { resource: ['cAB'], operation: ['delete'] } }, default: 0 },
];
