import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Call Log ID', name: 'callLogId', type: 'number', required: true,
		displayOptions: { show: { resource: ['callLog'], operation: ['getById'] } }, default: 0 },
];
