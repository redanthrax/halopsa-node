import { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Webhook ID',
		name: 'webhook_id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['webhooks'],
			},
		},
		default: '',
		required: true,
		description: 'The UUID of the webhook to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['webhooks'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Active',
				name: 'active',
				type: 'boolean',
				default: true,
				description: 'Whether the webhook is active',
			},
			{
				displayName: 'Authentication Type',
				name: 'authentication_type',
				type: 'options',
				options: [
					{
						name: 'None',
						value: 0,
					},
					{
						name: 'Basic Auth',
						value: 1,
					},
					{
						name: 'Bearer Token',
						value: 2,
					},
					{
						name: 'API Key',
						value: 3,
					},
					{
						name: 'Certificate',
						value: 4,
					},
				],
				default: 0,
				description: 'Authentication method for the webhook',
			},
			{
				displayName: 'Auto Disable Attempts',
				name: 'auto_disable_attempts',
				type: 'number',
				default: 0,
				description: 'Number of consecutive failures before auto-disabling (0 = never auto-disable)',
			},
			{
				displayName: 'Basic Password',
				name: 'basic_password',
				type: 'string',
				typeOptions: {
					password: true,
				},
				displayOptions: {
					show: {
						authentication_type: [1],
					},
				},
				default: '',
				description: 'Password for basic authentication',
			},
			{
				displayName: 'Basic Username',
				name: 'basic_username',
				type: 'string',
				displayOptions: {
					show: {
						authentication_type: [1],
					},
				},
				default: '',
				description: 'Username for basic authentication',
			},
			{
				displayName: 'Batch Delay Seconds',
				name: 'batch_delay_seconds',
				type: 'number',
				default: 30,
				typeOptions: {
					minValue: 1,
				},
				description: 'Delay in seconds for batch processing',
			},
			{
				displayName: 'Batch Limit',
				name: 'batch_limit',
				type: 'number',
				default: 0,
				description: 'Maximum number of items per batch (0 = unlimited)',
			},
			{
				displayName: 'Batch Method',
				name: 'batch_method',
				type: 'options',
				options: [
					{
						name: 'None',
						value: 0,
					},
					{
						name: 'Time Based',
						value: 1,
					},
					{
						name: 'Count Based',
						value: 2,
					},
				],
				default: 0,
				description: 'How to batch webhook executions',
			},
			{
				displayName: 'Content Type',
				name: 'content_type',
				type: 'string',
				default: 'application/json',
				description: 'Content type for webhook payloads',
			},
			{
				displayName: 'Custom Payload',
				name: 'custom_payload',
				type: 'boolean',
				default: false,
				description: 'Whether to use a custom payload format',
			},
			{
				displayName: 'HTTP Method',
				name: 'method',
				type: 'options',
				options: [
					{
						name: 'POST',
						value: 0,
					},
					{
						name: 'GET',
						value: 1,
					},
					{
						name: 'PUT',
						value: 2,
					},
					{
						name: 'DELETE',
						value: 3,
					},
					{
						name: 'PATCH',
						value: 4,
					},
				],
				default: 0,
				description: 'HTTP method to use for the webhook',
			},
			{
				displayName: 'Infinite Loop Threshold',
				name: 'infinite_loop_threshold',
				type: 'number',
				default: 5,
				typeOptions: {
					minValue: 1,
				},
				description: 'Maximum number of recursive executions to prevent infinite loops',
			},
			{
				displayName: 'Log Retention Policy Days',
				name: 'log_retention_policy_days',
				type: 'number',
				default: 30,
				typeOptions: {
					minValue: 1,
					maxValue: 365,
				},
				description: 'Number of days to retain webhook execution logs',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the webhook',
			},
			{
				displayName: 'Note',
				name: 'note',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Description or notes for this webhook (max 4000 characters)',
			},
			{
				displayName: 'Notify on Failure',
				name: 'notify_on_failure',
				type: 'boolean',
				default: false,
				description: 'Whether to send notifications when the webhook fails',
			},
			{
				displayName: 'Payload Type',
				name: 'payload_type',
				type: 'options',
				options: [
					{
						name: 'Default',
						value: 0,
					},
					{
						name: 'Custom JSON',
						value: 1,
					},
					{
						name: 'Runbook Variables',
						value: 2,
					},
				],
				default: 0,
				description: 'Type of payload to send',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'Outbound Webhook',
						value: 0,
						description: 'Traditional webhook that sends data to external URLs',
					},
					{
						name: 'Runbook',
						value: 1,
						description: 'Internal automation runbook',
					},
				],
				default: 0,
				description: 'The type of webhook to create',
			},
			{
				displayName: 'URL',
				name: 'url',
				type: 'string',
				displayOptions: {
					show: {
						type: [0],
					},
				},
				default: '',
				description: 'The URL to send webhook payloads to (required for outbound webhooks)',
			},
		],
	},
];