import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Automation ID',
		name: 'automationId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['automations'], operation: ['getById'] } },
		default: 0,
	},
];
