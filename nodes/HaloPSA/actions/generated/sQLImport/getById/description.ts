import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'SQLImport ID', name: 'sQLImportId', type: 'number', required: true,
		displayOptions: { show: { resource: ['sQLImport'], operation: ['getById'] } }, default: 0 },
];
