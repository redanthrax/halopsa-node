import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Service Status ID', name: 'serviceStatuId', type: 'number', required: true,
		displayOptions: { show: { resource: ['serviceStatus'], operation: ['delete'] } }, default: 0 },
];
