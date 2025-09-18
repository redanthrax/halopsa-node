import { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Webhook Event ID',
		name: 'webhookEvent_id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['delete'],
				resource: ['webhookEvents'],
			},
		},
		default: '',
		required: true,
		description: 'The UUID of the webhook event to delete',
	},
];