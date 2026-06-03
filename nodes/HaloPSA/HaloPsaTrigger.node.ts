import {
	IHookFunctions,
	IWebhookFunctions,
	IDataObject,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
	ILoadOptionsFunctions,
	INodePropertyOptions,
	NodeConnectionTypes,
} from 'n8n-workflow';

import { apiRequest } from './transport';
import { toNodeApiError } from './errors';

const EVENT_TYPES: Record<number, string> = {
	3: 'New Ticket Logged',
	19: 'Ticket Updated by User',
	39: 'Closed',
	42: '1st SLA Warning',
	46: '2nd SLA Warning',
	70: 'Ticket Deadline',
	76: 'Ticket Status Changed',
	1072: 'Ticket Deleted',
};

function getEventName(eventNumber: number): string {
	return EVENT_TYPES[eventNumber] || `Event ${eventNumber}`;
}

export class HaloPsaTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'HaloPSA Trigger',
		name: 'haloPsaTrigger',
		icon: 'file:halopsa.svg',
		group: ['trigger'],
		version: 1,
		subtitle: '={{$parameter["event"]}}',
		description: 'Starts the workflow when HaloPSA events occur',
		defaults: {
			name: 'HaloPSA Trigger',
		},
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'haloPSACompleteApiOAuth2OAuth2Api',
				required: true,
			},
		],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			{
				displayName: 'Event Type Name or ID',
				name: 'eventNumber',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getEventTypes',
				},
				default: '',
				required: true,
				description: 'The HaloPSA event type to trigger on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Webhook Name',
				name: 'webhookName',
				type: 'string',
				default: 'n8n Webhook',
				required: true,
				description: 'Name for the webhook in HaloPSA (will be suffixed with event type). If a webhook with this name already exists, it will be updated with the new configuration.',
			},
			{
				displayName: 'Update Existing',
				name: 'updateExisting',
				type: 'notice',
				default: '',
				displayOptions: {
					show: {},
				},
				typeOptions: {
					theme: 'warning',
				},
				description: 'WARNING: If a webhook with the same name already exists in HaloPSA, it will be automatically updated with your current configuration instead of creating a duplicate',
			},
			{
				displayName: 'Options',
				name: 'options',
				type: 'collection',
				placeholder: 'Add Option',
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
						displayName: 'Batch Delay (Seconds)',
						name: 'batchDelaySeconds',
						type: 'number',
						default: 60,
						displayOptions: {
							show: {
								batchMethod: [1],
							},
						},
						description: 'Delay in seconds before sending batched events',
					},
					{
						displayName: 'Batch Limit',
						name: 'batchLimit',
						type: 'number',
						default: 10,
						displayOptions: {
							show: {
								batchMethod: [2],
							},
						},
						description: 'Maximum number of events per batch (0 = unlimited)',
					},
					{
						displayName: 'Batch Method',
						name: 'batchMethod',
						type: 'options',
						options: [
							{
								name: 'None',
								value: 0,
								description: 'No batching - send each event immediately',
							},
							{
								name: 'Time Based',
								value: 1,
								description: 'Batch events based on time delay',
							},
							{
								name: 'Count Based',
								value: 2,
								description: 'Batch events based on count',
							},
						],
						default: 0,
						description: 'How to batch webhook executions',
					},
					{
						displayName: 'Content Type',
						name: 'contentType',
						type: 'options',
						options: [
							{
								name: 'Application/json',
								value: 'application/json',
							},
							{
								name: 'Application/X-Www-Form-Urlencoded',
								value: 'application/x-www-form-urlencoded',
							},
						],
						default: 'application/json',
						description: 'Content type for the webhook payload',
					},
					{
						displayName: 'Include Details',
						name: 'includeDetails',
						type: 'boolean',
						default: true,
						description: 'Whether to request detailed information in the webhook payload',
					},
				],
			},
		],
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default');
				const eventNumber = this.getNodeParameter('eventNumber') as number;
				const webhookName = this.getNodeParameter('webhookName') as string;
				const fullWebhookName = `${webhookName} - ${getEventName(eventNumber)}`;

				try {
					const webhooks = await apiRequest.call(
						this,
						'GET',
						'/Webhook',
						{},
						{ type: 0 }
					);

					if (Array.isArray(webhooks)) {
						let existingWebhook = webhooks.find(
							(webhook: IDataObject) => webhook.url === webhookUrl
						);

						let needsUpdate = false;
						if (!existingWebhook) {
							existingWebhook = webhooks.find(
								(webhook: IDataObject) => webhook.name === fullWebhookName
							);

							if (existingWebhook) {
								needsUpdate = existingWebhook.url !== webhookUrl;
							}
						}

						if (existingWebhook) {
							const webhookData = this.getWorkflowStaticData('node');
							webhookData.webhookId = existingWebhook.id;

							if (needsUpdate) {
								return false;
							}

							return true;
						}
					}

					return false;
				} catch (error) {
					return false;
				}
			},

			async create(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default');
				const eventNumber = this.getNodeParameter('eventNumber') as number;
				const webhookName = this.getNodeParameter('webhookName') as string;
				const options = this.getNodeParameter('options', {}) as IDataObject;
				const staticData = this.getWorkflowStaticData('node');
				const existingWebhookId = staticData.webhookId as string;

				const webhookData: IDataObject = {
					name: `${webhookName} - ${getEventName(eventNumber)}`,
					url: webhookUrl,
					type: 0,
					method: 0,
					active: options.active !== false,
					content_type: options.contentType || 'application/json',
					authentication_type: 0,
				};

				if (options.batchMethod !== undefined) {
					webhookData.batch_method = options.batchMethod;
				}

				if (options.batchDelaySeconds !== undefined && options.batchMethod === 1) {
					webhookData.batch_delay_seconds = options.batchDelaySeconds;
				}

				if (options.batchLimit !== undefined && options.batchMethod === 2) {
					webhookData.batch_limit = options.batchLimit;
				}

				if (existingWebhookId) {
					webhookData.id = existingWebhookId;
				}

				try {
					const response = await apiRequest.call(
						this,
						'POST',
						'/Webhook',
						[webhookData],
						{}
					);

					let webhookId: string | undefined;

					if (Array.isArray(response) && response.length > 0 && response[0].id) {
						webhookId = response[0].id;
					} else if (response && typeof response === 'object' && (response as IDataObject).id) {
						webhookId = (response as IDataObject).id as string;
					}

					if (webhookId) {
						staticData.webhookId = webhookId;
						staticData.eventNumber = eventNumber;

						if (eventNumber && eventNumber > 0) {
							try {
								const notificationData: IDataObject = {
									webhook_id: webhookId,
									type: -2,
									delivery_method: 6,
									name: '',
									agent_id: 0,
									slack_id: 0,
									teams_id: 0,
									mattermost_channelid: 0,
									email_list: '',
									filter_type: 2,
									safe_instances: 0,
									restriction_type: 0,
									popupinnotificationpane: true,
									sendpushnotificationbrowser: false,
									sendpushnotification: false,
									customisecolour: false,
								eventno: eventNumber.toString(),
									interval: '0',
									useworkinghours: '0',
									conditions: [],
									emailtemplate_id: 32,
								};

								await apiRequest.call(
									this,
									'POST',
									'/Notification',
									[notificationData],
									{}
								);
							} catch (error) {
							}
						}

						return true;
					}

					return false;
				} catch (error) {
					throw toNodeApiError(this, error);
				}
			},

			async delete(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');
				const webhookId = webhookData.webhookId as string;

				if (!webhookId) {
					return false;
				}

				try {
					await apiRequest.call(
						this,
						'DELETE',
						`/Webhook/${webhookId}`,
						{},
						{}
					);

					delete webhookData.webhookId;
					delete webhookData.eventNumber;

					return true;
				} catch (error) {
					return false;
				}
			},
		},
	};

	methods = {
		loadOptions: {
			async getEventTypes(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return [
					{ name: 'New Ticket Logged', value: 3, description: 'Triggers when a new ticket is logged' },
					{ name: 'Ticket Updated by User', value: 19, description: 'Triggers when a ticket is updated by a user' },
					{ name: 'Closed', value: 39, description: 'Triggers when a ticket is closed' },
					{ name: '1st SLA Warning', value: 42, description: 'Triggers on first SLA warning' },
					{ name: '2nd SLA Warning', value: 46, description: 'Triggers on second SLA warning' },
					{ name: 'Ticket Deadline', value: 70, description: 'Triggers when a ticket reaches its deadline' },
					{ name: 'Ticket Status Changed', value: 76, description: 'Triggers when a ticket status changes' },
					{ name: 'Ticket Deleted', value: 1072, description: 'Triggers when a ticket is deleted' },
				];
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const mode = this.getMode();
		const bodyData = this.getBodyData();
		const eventNumber = this.getNodeParameter('eventNumber') as number;

		if (mode === 'manual') {
			const webhookUrl = this.getNodeWebhookUrl('default');
			const webhookName = this.getNodeParameter('webhookName') as string;
			const options = this.getNodeParameter('options', {}) as IDataObject;

			const webhookData: IDataObject = {
				name: `${webhookName} - ${getEventName(eventNumber)}`,
				url: webhookUrl,
				type: 0,
				method: 0,
				active: options.active !== false,
				content_type: options.contentType || 'application/json',
				authentication_type: 0,
			};

			if (options.batchMethod !== undefined) {
				webhookData.batch_method = options.batchMethod;
			}

			if (options.batchDelaySeconds !== undefined && options.batchMethod === 1) {
				webhookData.batch_delay_seconds = options.batchDelaySeconds;
			}

			if (options.batchLimit !== undefined && options.batchMethod === 2) {
				webhookData.batch_limit = options.batchLimit;
			}

			try {
				const webhooks = await apiRequest.call(
					this,
					'GET',
					'/Webhook',
					{},
					{ type: 0 }
				);

				let existingWebhook;
				if (Array.isArray(webhooks)) {
					existingWebhook = webhooks.find(
						(webhook: IDataObject) =>
							webhook.url === webhookUrl || webhook.name === webhookData.name
					);
				}

				if (existingWebhook) {
					webhookData.id = existingWebhook.id;
				}

				const response = await apiRequest.call(
					this,
					'POST',
					'/Webhook',
					[webhookData],
					{}
				);

				if (Array.isArray(response) && response.length > 0 && response[0].id) {
					const webhookId = response[0].id;
					const staticData = this.getWorkflowStaticData('node');
					staticData.webhookId = webhookId;
					staticData.eventNumber = eventNumber;
				} else if (response && typeof response === 'object' && (response as IDataObject).id) {
					const webhookId = (response as IDataObject).id as string;
					const staticData = this.getWorkflowStaticData('node');
					staticData.webhookId = webhookId;
					staticData.eventNumber = eventNumber;
				}
			} catch (error) {
			}
		}

		if (Array.isArray(bodyData)) {
			const returnData = bodyData.map((item) => ({ json: item }));
			return {
				workflowData: [returnData],
			};
		} else if (bodyData && typeof bodyData === 'object') {
			return {
				workflowData: [[{ json: bodyData }]],
			};
		} else {
			return {
				workflowData: [[{ json: { data: bodyData, eventNumber } }]],
			};
		}
	}
}
