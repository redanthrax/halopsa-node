import { INodeProperties } from 'n8n-workflow';

export const reactionDescription: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'json',
		displayOptions: { show: { resource: ['actions'], operation: ['reaction'] } },
		default: {},
		description: 'ActionReaction JSON body for POST /Actions/reaction',
	},
];
