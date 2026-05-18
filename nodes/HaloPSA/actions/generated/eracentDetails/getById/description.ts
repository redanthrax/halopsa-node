import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Eracent Details ID', name: 'eracentDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['eracentDetails'], operation: ['getById'] } }, default: 0 },
];
