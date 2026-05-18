import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Facebook Details ID', name: 'facebookDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['facebookDetails'], operation: ['getById'] } }, default: 0 },
];
