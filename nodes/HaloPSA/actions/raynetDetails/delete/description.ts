import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Detail ID', name: 'detailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['raynetDetails'], operation: ['delete'] } }, default: 0 },
];
