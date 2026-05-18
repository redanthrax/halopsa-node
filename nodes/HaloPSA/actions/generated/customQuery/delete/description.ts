import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Custom Query ID', name: 'customQueryId', type: 'number', required: true,
		displayOptions: { show: { resource: ['customQuery'], operation: ['delete'] } }, default: 0 },
];
