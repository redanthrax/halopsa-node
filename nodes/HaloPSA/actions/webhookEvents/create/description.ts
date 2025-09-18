import { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Event Name',
		name: 'eventName',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['webhookEvents'],
			},
		},
		default: '',
		required: true,
		description: 'The name of the webhook event to create',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['webhookEvents'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Description for the webhook event',
			},
			{
				displayName: 'Active',
				name: 'active',
				type: 'boolean',
				default: true,
				description: 'Whether the webhook event is active',
			},
			{
				displayName: 'Category',
				name: 'category',
				type: 'string',
				default: '',
				description: 'Category for the webhook event',
			},
			{
				displayName: 'Event Type',
				name: 'eventtype',
				type: 'string',
				default: '',
				description: 'Type of the webhook event',
			},
		],
	},
];