import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Priority ID', name: 'priorityId', type: 'number', required: true,
		displayOptions: { show: { resource: ['priority'], operation: ['delete'] } }, default: 0 },
];
