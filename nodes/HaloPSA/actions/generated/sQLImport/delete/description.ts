import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'SQLImport ID', name: 'sQLImportId', type: 'number', required: true,
		displayOptions: { show: { resource: ['sQLImport'], operation: ['delete'] } }, default: 0 },
];
