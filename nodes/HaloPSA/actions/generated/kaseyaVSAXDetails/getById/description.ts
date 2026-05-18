import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Kaseya VSAXDetails ID', name: 'kaseyaVSAXDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['kaseyaVSAXDetails'], operation: ['getById'] } }, default: 0 },
];
