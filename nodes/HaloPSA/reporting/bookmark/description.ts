import { INodeProperties } from 'n8n-workflow';

export const bookmarkDescription: INodeProperties[] = [
	{
		displayName: 'Report Name or ID',
		name: 'reportId',
		type: 'options',
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		typeOptions: { loadOptionsMethod: 'getReports' },
		required: true,
		displayOptions: { show: { resource: ['reporting'], operation: ['bookmark'] } },
		default: '',
	},
	{
		displayName: 'Parameters',
		name: 'parameters',
		type: 'json',
		displayOptions: { show: { resource: ['reporting'], operation: ['bookmark'] } },
		default: {},
		description: 'Optional AnalyzerProfile fields merged into the bookmark request',
	},
];
