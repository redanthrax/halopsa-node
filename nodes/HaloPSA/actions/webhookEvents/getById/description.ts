import { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Webhook Event ID',
		name: 'webhookEvent_id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['getById'],
				resource: ['webhookEvents'],
			},
		},
		default: '',
		required: true,
		description: 'The UUID of the webhook event to retrieve',
	},
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		placeholder: 'Add Option',
		displayOptions: {
			show: {
				operation: ['getById'],
				resource: ['webhookEvents'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Include Details',
				name: 'includedetails',
				type: 'boolean',
				default: false,
				description: 'Whether to include extra objects in the response',
			},
		],
	},
];