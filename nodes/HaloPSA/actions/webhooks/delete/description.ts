import { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Webhook ID',
		name: 'webhook_id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['delete'],
				resource: ['webhooks'],
			},
		},
		default: '',
		required: true,
		description: 'The UUID of the webhook to delete',
	},
];