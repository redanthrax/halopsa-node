import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Armis Details ID', name: 'armisDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['armisDetails'], operation: ['getById'] } }, default: 0 },
];
