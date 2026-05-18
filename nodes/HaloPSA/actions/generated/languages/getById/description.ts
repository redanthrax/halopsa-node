import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Languages ID', name: 'languageId', type: 'number', required: true,
		displayOptions: { show: { resource: ['languages'], operation: ['getById'] } }, default: 0 },
];
