import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Integration Export ID', name: 'integrationExportId', type: 'number', required: true,
		displayOptions: { show: { resource: ['integrationExport'], operation: ['delete'] } }, default: 0 },
];
