import { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Webhook ID',
		name: 'webhook_id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['execute'],
				resource: ['webhooks'],
			},
		},
		default: '',
		required: true,
		description: 'The UUID of the webhook/runbook to execute',
	},
	{
		displayName: 'Test Mode',
		name: 'testMode',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: ['execute'],
				resource: ['webhooks'],
			},
		},
		default: true,
		description: 'Whether to run the webhook in test mode',
	},
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		placeholder: 'Add Option',
		displayOptions: {
			show: {
				operation: ['execute'],
				resource: ['webhooks'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Custom Parameters',
				name: 'customParameters',
				type: 'json',
				default: '{}',
				description: 'Additional parameters to pass to the webhook execution as JSON',
			},
		],
	},
];