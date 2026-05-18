import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Import CSV ID', name: 'importCSVId', type: 'number', required: true,
		displayOptions: { show: { resource: ['importCSV'], operation: ['getById'] } }, default: 0 },
];
