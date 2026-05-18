import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'AWSDetails ID', name: 'aWSDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['aWSDetails'], operation: ['getById'] } }, default: 0 },
];
