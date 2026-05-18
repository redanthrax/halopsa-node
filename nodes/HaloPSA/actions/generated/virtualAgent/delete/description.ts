import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Virtual Agent ID', name: 'virtualAgentId', type: 'number', required: true,
		displayOptions: { show: { resource: ['virtualAgent'], operation: ['delete'] } }, default: 0 },
];
