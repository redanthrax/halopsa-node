import { INodeProperties } from 'n8n-workflow';

export const runDescription: INodeProperties[] = [
	{
		displayName: 'Report Name or ID',
		name: 'reportId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getReports',
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['reporting'],
				operation: ['run'],
			},
		},
		default: '',
		description:
			'The saved report to run. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Parameters',
		name: 'parameters',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['reporting'],
				operation: ['run'],
			},
		},
		default: {},
		description:
			'Optional JSON object merged into GET /Report/{ID} query string (e.g. client_id, ticket_id, reportingperiod) with loadreport=true',
	},
];
