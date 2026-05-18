import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Detail ID', name: 'detailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['raynetDetails'], operation: ['getById'] } }, default: 0 },
];
