import { INodeProperties } from 'n8n-workflow';

export const getPublishedDataDescription: INodeProperties[] = [
	{
		displayName: 'Published ID',
		name: 'publishedId',
		type: 'string',
		required: true,
		displayOptions: { show: { resource: ['reporting'], operation: ['getPublishedData'] } },
		default: '',
		description: 'Published report identifier from ReportData',
	},
];
