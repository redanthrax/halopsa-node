import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'json',
		displayOptions: { show: { resource: ['teams'], operation: ['create'] } },
		default: {},
		description: 'SectionDetail object or array for POST /Team',
	},
];
