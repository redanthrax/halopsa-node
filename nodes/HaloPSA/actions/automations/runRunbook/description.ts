import { INodeProperties } from 'n8n-workflow';

export const runRunbookDescription: INodeProperties[] = [
	{
		displayName: 'Runbook ID',
		name: 'runbookId',
		type: 'string',
		required: true,
		displayOptions: { show: { resource: ['automations'], operation: ['runRunbook'] } },
		default: '',
		description: 'UUID of the runbook to execute',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'json',
		displayOptions: { show: { resource: ['automations'], operation: ['runRunbook'] } },
		default: {},
		description: 'Request body (e.g. formCollection) sent to POST /Automation/{runbookId}',
	},
];
