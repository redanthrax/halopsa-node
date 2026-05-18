import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'MO ID', name: 'mOId', type: 'number', required: true,
		displayOptions: { show: { resource: ['mO'], operation: ['getById'] } }, default: 0 },
];
