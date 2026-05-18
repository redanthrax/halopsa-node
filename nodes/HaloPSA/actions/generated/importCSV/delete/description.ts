import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Import CSV ID', name: 'importCSVId', type: 'number', required: true,
		displayOptions: { show: { resource: ['importCSV'], operation: ['delete'] } }, default: 0 },
];
