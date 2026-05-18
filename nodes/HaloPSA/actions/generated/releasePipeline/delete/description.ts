import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Release Pipeline ID', name: 'releasePipelineId', type: 'number', required: true,
		displayOptions: { show: { resource: ['releasePipeline'], operation: ['delete'] } }, default: 0 },
];
