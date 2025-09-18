import { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Webhook ID',
		name: 'webhook_id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['getById'],
				resource: ['webhooks'],
			},
		},
		default: '',
		required: true,
		description: 'The UUID of the webhook to retrieve',
	},
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		placeholder: 'Add Option',
		displayOptions: {
			show: {
				operation: ['getById'],
				resource: ['webhooks'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Include Details',
				name: 'includedetails',
				type: 'boolean',
				default: false,
				description: 'Whether to include extra objects in the response (events, steps, etc.)',
			},
		],
	},
];