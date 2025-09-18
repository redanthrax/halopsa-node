import { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Webhook Event ID',
		name: 'webhookEvent_id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['webhookEvents'],
			},
		},
		default: '',
		required: true,
		description: 'The UUID of the webhook event to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['webhookEvents'],
			},
		},
		default: {},
		options: [
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
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Description for the webhook event',
			},
			{
				displayName: 'Event Name',
				name: 'eventname',
				type: 'string',
				default: '',
				description: 'The name of the webhook event',
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