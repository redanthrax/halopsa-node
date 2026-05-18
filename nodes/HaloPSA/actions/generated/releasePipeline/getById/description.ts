import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Release Pipeline ID', name: 'releasePipelineId', type: 'number', required: true,
		displayOptions: { show: { resource: ['releasePipeline'], operation: ['getById'] } }, default: 0 },
];
