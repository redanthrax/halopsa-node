import { INodeProperties } from 'n8n-workflow';

export const createPdfDescription: INodeProperties[] = [
	{
		displayName: 'Report Name or ID',
		name: 'reportId',
		type: 'options',
		typeOptions: { loadOptionsMethod: 'getReports' },
		required: true,
		displayOptions: { show: { resource: ['reporting'], operation: ['createPdf'] } },
		default: '',
	},
	{
		displayName: 'Parameters',
		name: 'parameters',
		type: 'json',
		displayOptions: { show: { resource: ['reporting'], operation: ['createPdf'] } },
		default: {},
		description: 'AnalyzerProfile fields for PDF generation',
	},
];
