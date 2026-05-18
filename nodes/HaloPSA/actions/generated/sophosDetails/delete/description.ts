import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Sophos Details ID', name: 'sophosDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['sophosDetails'], operation: ['delete'] } }, default: 0 },
];
