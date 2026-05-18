import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'AWSDetails ID', name: 'aWSDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['aWSDetails'], operation: ['delete'] } }, default: 0 },
];
