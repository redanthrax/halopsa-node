import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Event Rule ID', name: 'eventRuleId', type: 'number', required: true,
		displayOptions: { show: { resource: ['eventRule'], operation: ['getById'] } }, default: 0 },
];
