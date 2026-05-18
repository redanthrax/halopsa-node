import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Event Rule ID', name: 'eventRuleId', type: 'number', required: true,
		displayOptions: { show: { resource: ['eventRule'], operation: ['delete'] } }, default: 0 },
];
