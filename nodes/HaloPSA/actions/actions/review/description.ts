import { INodeProperties } from 'n8n-workflow';

export const reviewDescription: INodeProperties[] = [
	{
		displayName: 'Action ID',
		name: 'actionId',
		type: 'number',
		displayOptions: { show: { resource: ['actions'], operation: ['review'] } },
		default: 0,
		description: 'The ID of the action to review (merged into body as ID when greater than 0)',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'json',
		displayOptions: { show: { resource: ['actions'], operation: ['review'] } },
		default: {},
		description: 'Additional JSON fields sent in the request body',
	},
];
