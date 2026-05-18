import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Automation ID',
		name: 'automationId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['automations'], operation: ['delete'] } },
		default: 0,
	},
];
