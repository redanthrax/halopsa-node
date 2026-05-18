import { INodeProperties } from 'n8n-workflow';

export const printDescription: INodeProperties[] = [
	{
		displayName: 'Report Name or ID',
		name: 'reportId',
		type: 'options',
		typeOptions: { loadOptionsMethod: 'getReports' },
		required: true,
		displayOptions: { show: { resource: ['reporting'], operation: ['print'] } },
		default: '',
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
	{
		displayName: 'Parameters',
		name: 'parameters',
		type: 'json',
		displayOptions: { show: { resource: ['reporting'], operation: ['print'] } },
		default: {},
		description: 'AnalyzerProfile fields merged into the print request body',
	},
];
