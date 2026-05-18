import { INodeProperties } from 'n8n-workflow';

export const opExportDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['tenable'], operation: ['opExport'] } }, default: {} },
];
