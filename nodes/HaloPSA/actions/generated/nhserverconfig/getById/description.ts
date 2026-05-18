import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Nhserverconfig ID', name: 'nhserverconfigId', type: 'number', required: true,
		displayOptions: { show: { resource: ['nhserverconfig'], operation: ['getById'] } }, default: 0 },
];
