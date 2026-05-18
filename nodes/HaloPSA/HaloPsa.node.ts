import * as actions from './actions/actions';
import * as agents from './actions/agents';
import * as appointments from './actions/appointments';
import * as attachments from './actions/attachments';
import * as ticketApprovals from './actions/ticketApprovals';
import * as tickets from './actions/tickets';
import * as projects from './actions/projects';
import * as quotations from './actions/quotations';
import * as salesOrders from './actions/salesOrders';
import * as recurringInvoices from './actions/recurringInvoices';
import * as automations from './actions/automations';
import * as assets from './actions/assets';
import * as sites from './actions/sites';
import * as client from './actions/client';
import * as cannedText from './actions/cannedText';
import * as contracts from './actions/contracts';
import * as customApi from './actions/customApi';
import * as knowledgeBase from './actions/knowledgeBase';
import * as notifications from './actions/notifications';
import * as lookups from './actions/lookups';
import * as opportunities from './actions/opportunities';
import * as purchaseOrders from './actions/purchaseOrders';
import * as invoices from './actions/invoices';
import * as items from './actions/items';
import * as timesheet from './actions/timesheet';
import * as timesheetEvent from './actions/timesheetEvent';
import * as ticketStatuses from './actions/ticketStatuses';
import * as ticketTypes from './actions/ticketTypes';
import * as webhooks from './actions/webhooks';
import * as webhookEvents from './actions/webhookEvents';
import * as fieldInfo from './actions/fieldInfo';
import * as holidays from './actions/holidays';
import * as users from './actions/users';
import * as reporting from './reporting';
import * as surveys from './actions/surveys';

import {
	IExecuteFunctions,
	ILoadOptionsFunctions,
	INodeExecutionData,
	INodePropertyOptions,
	INodeType,
	INodeTypeDescription,
	NodeConnectionTypes,
} from 'n8n-workflow';

export class HaloPsa implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'HaloPSA Complete',
		name: 'haloPsa',
		icon: 'file:halopsa.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get data from the HaloPSA API',
		documentationUrl: 'https://github.com/redanthrax/halopsa-node',
		defaults: {
			name: 'HaloPSA Complete',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'haloPSACompleteApiOAuth2OAuth2Api',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
			options: [
				{
					name: 'Action',
					value: 'actions',
				},
				{
					name: 'Agent',
					value: 'agents',
				},
				{
					name: 'Appointment',
					value: 'appointments',
				},
				{
					name: 'Asset',
					value: 'assets',
				},
				{
					name: 'Attachment',
					value: 'attachments',
				},
				{
					name: 'Automation',
					value: 'automations',
				},
				{
					name: 'Canned Text',
					value: 'cannedText',
				},
				{
					name: 'Client',
					value: 'client',
				},
				{
					name: 'Contract',
					value: 'contracts',
				},
				{
					name: 'Custom API Call',
					value: 'customApi',
				},
				{
					name: 'Field Info',
					value: 'fieldInfo',
				},
				{
					name: 'Holiday',
					value: 'holidays',
				},
				{
					name: 'Invoice',
					value: 'invoices',
				},
				{
					name: 'Item',
					value: 'items',
				},
				{
					name: 'Notification',
					value: 'notifications',
				},
				{
					name: 'Knowledge Base',
					value: 'knowledgeBase',
				},
				{
					name: 'Lookup',
					value: 'lookups',
				},
				{
					name: 'Opportunity',
					value: 'opportunities',
				},
				{
					name: 'Project',
					value: 'projects',
				},
				{
					name: 'Purchase Order',
					value: 'purchaseOrders',
				},
				{
					name: 'Quotation',
					value: 'quotations',
				},
				{
					name: 'Recurring Invoice',
					value: 'recurringInvoices',
				},
				{
					name: 'Reporting',
					value: 'reporting',
				},
				{
					name: 'Sales Order',
					value: 'salesOrders',
				},
				{
					name: 'Site',
					value: 'sites',
				},
				{
					name: 'Survey',
					value: 'surveys',
				},
				{
					name: 'Ticket',
					value: 'tickets',
				},
				{
					name: 'Ticket Approval',
					value: 'ticketApprovals',
				},
				{
					name: 'Ticket Status',
					value: 'ticketStatuses',
				},
				{
					name: 'Ticket Type',
					value: 'ticketTypes',
				},
				{
					name: 'Timesheet',
					value: 'timesheet',
				},
				{
					name: 'Timesheet Event',
					value: 'timesheetEvent',
				},
				{
					name: 'User',
					value: 'users',
				},
				{
					name: 'Webhook',
					value: 'webhooks',
				},
				{
					name: 'Webhook Event',
					value: 'webhookEvents',
				},
				],
				default: 'tickets',
			},
			...actions.description,
			...agents.description,
			...appointments.description,
			...attachments.description,
			...automations.description,
			...assets.description,
			...cannedText.description,
			...client.description,
			...contracts.description,
			...customApi.description,
			...fieldInfo.description,
			...holidays.description,
			...invoices.description,
			...items.description,
			...notifications.description,
			...knowledgeBase.description,
			...lookups.description,
			...opportunities.description,
			...projects.description,
			...purchaseOrders.description,
			...quotations.description,
			...recurringInvoices.description,
			...reporting.description,
			...salesOrders.description,
			...sites.description,
			...surveys.description,
			...ticketApprovals.description,
			...ticketStatuses.description,
			...ticketTypes.description,
			...tickets.description,
			...timesheet.description,
			...timesheetEvent.description,
			...users.description,
			...webhooks.description,
			...webhookEvents.description,
		],
	};

	methods = {
		loadOptions: {
		getTicketTypes: async function(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
			const { apiRequest } = await import('./transport');
			try {
					const requestMethod = 'GET';
					const endpoint = '/TicketType';
					const body = {};
					const qs = {};

					const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

					const options: INodePropertyOptions[] = [];
					if (Array.isArray(responseData)) {
						for (const ticketType of responseData) {
							if (ticketType.id && ticketType.name) {
								options.push({
									name: ticketType.name,
									value: ticketType.id.toString(),
								});
							}
						}
					}
					return options.sort((a, b) => a.name.localeCompare(b.name));
				} catch (error) {
					return [];
				}
			},
			getTicketStatuses: async function(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const { apiRequest } = await import('./transport');
				try {
					const requestMethod = 'GET';
					const endpoint = '/Status';
					const body = {};
					const qs = {};

					const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

					const options: INodePropertyOptions[] = [];
					if (Array.isArray(responseData)) {
						for (const status of responseData) {
							if (status.id && status.name) {
								options.push({
									name: status.name,
									value: status.id.toString(),
								});
							}
						}
					}
					return options.sort((a, b) => a.name.localeCompare(b.name));
				} catch (error) {
					return [];
				}
			},
			getCustomFields: async function(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const { apiRequest } = await import('./transport');
				const resource = this.getCurrentNodeParameter('resource') as string;

				const typeMapping: Record<string, number> = {
					client: 2,
					tickets: 1,
					sites: 3,
					assets: 5,
					projects: 1,
					users: 4,
				};

				const typeid = typeMapping[resource];
				if (typeid === undefined) {
					return [];
				}

				try {
					const requestMethod = 'GET';
					const endpoint = '/FieldInfo';
					const body = {};
					const qs = { typeid };

					const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

					const options: INodePropertyOptions[] = [];
					if (Array.isArray(responseData)) {
						for (const field of responseData) {
							if (field.id && field.label) {
								options.push({
									name: field.label,
									value: field.id.toString(),
									description: field.name || field.hint || '',
								});
							}
						}
					}
					return options.sort((a, b) => a.name.localeCompare(b.name));
				} catch (error) {
					return [];
				}
			},
			getAssetTypes: async function(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const { apiRequest } = await import('./transport');
				try {
					const requestMethod = 'GET';
					const endpoint = '/AssetType';
					const body = {};
					const qs = {};

					const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

					const options: INodePropertyOptions[] = [];
					if (Array.isArray(responseData)) {
						for (const assetType of responseData) {
							if (assetType.id && assetType.name) {
								options.push({
									name: assetType.name,
									value: assetType.id.toString(),
									description: assetType.description || '',
								});
							}
						}
					}
					return options.sort((a, b) => a.name.localeCompare(b.name));
				} catch (error) {
					return [];
				}
			},
			getAssetFields: async function(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const { apiRequest } = await import('./transport');
				const assettypeIdParam = this.getCurrentNodeParameter('assettype_id_for_fields');
				const assettypeId = typeof assettypeIdParam === 'string' ? parseInt(assettypeIdParam, 10) : (assettypeIdParam as number);

				if (!assettypeId || assettypeId === 0 || typeof assettypeId !== 'number' || isNaN(assettypeId)) {
					return [];
				}

				try {
					const requestMethod = 'GET';
					const endpoint = `/AssetType/${assettypeId}`;
					const body = {};
					const qs = { includedetails: true };

					const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

					const options: INodePropertyOptions[] = [];
					if (responseData && responseData.fields && Array.isArray(responseData.fields)) {
						for (const field of responseData.fields) {
							if (field.field_id && field.field_name) {
								const fieldId = typeof field.field_id === 'number' ? Math.floor(field.field_id) : field.field_id;
								options.push({
									name: field.field_name,
									value: fieldId.toString(),
									description: field.type ? `Type: ${field.type}` : '',
								});
							}
						}
					}
					return options.sort((a, b) => a.name.localeCompare(b.name));
				} catch (error) {
					return [];
				}
			},
			getAgents: async function(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const { apiRequest } = await import('./transport');
				try {
					const requestMethod = 'GET';
					const endpoint = '/Agent';
					const body = {};
					const qs = {};

					const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

					const options: INodePropertyOptions[] = [];
					if (Array.isArray(responseData)) {
						for (const agent of responseData) {
							if (agent.id && agent.name) {
								options.push({
									name: agent.name,
									value: agent.id.toString(),
								});
							}
						}
					}
					return options.sort((a, b) => a.name.localeCompare(b.name));
				} catch (error) {
				return [];
			}
			},
			getUsers: async function(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const { apiRequest } = await import('./transport');
				try {
					const requestMethod = 'GET';
					const endpoint = '/Users';
					const body = {};
					const qs = {};

					const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

					const options: INodePropertyOptions[] = [];
					let users = [];
					if (responseData && responseData.users) {
						users = Array.isArray(responseData.users) ? responseData.users : [responseData.users];
					} else if (Array.isArray(responseData)) {
						users = responseData;
					}

					for (const user of users) {
						if (user.id && user.name) {
							options.push({
								name: user.name,
								value: user.id.toString(),
							});
						}
					}
					return options.sort((a, b) => a.name.localeCompare(b.name));
				} catch (error) {
					return [];
				}
			},
			getClients: async function(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const { apiRequest } = await import('./transport');
				try {
					const requestMethod = 'GET';
					const endpoint = '/Client';
					const body = {};
					const qs = {};

					const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

					const options: INodePropertyOptions[] = [];
					let clients = [];
					if (responseData && responseData.clients) {
						clients = Array.isArray(responseData.clients) ? responseData.clients : [responseData.clients];
					} else if (Array.isArray(responseData)) {
						clients = responseData;
					}

					for (const client of clients) {
						if (client.id && client.name) {
							options.push({
								name: client.name,
								value: client.id.toString(),
							});
						}
					}
					return options.sort((a, b) => a.name.localeCompare(b.name));
				} catch (error) {
					return [];
				}
			},
		getSites: async function(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
			const { apiRequest } = await import('./transport');
			let clientIdParam = this.getCurrentNodeParameter('client_id');
			if (!clientIdParam) {
				clientIdParam = this.getCurrentNodeParameter('updateFields.client_id');
			}
			if (!clientIdParam) {
				clientIdParam = this.getCurrentNodeParameter('additionalFields.client_id');
			}
			const clientId = typeof clientIdParam === 'string' ? parseInt(clientIdParam, 10) : (clientIdParam as number);

			if (!clientId || clientId === 0 || typeof clientId !== 'number' || isNaN(clientId)) {
				return [];
			}

				try {
					const requestMethod = 'GET';
					const endpoint = '/Site';
					const body = {};
					const qs = { client_id: clientId };

					const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

					const options: INodePropertyOptions[] = [];
					let sites = [];
					if (responseData && responseData.sites) {
						sites = Array.isArray(responseData.sites) ? responseData.sites : [responseData.sites];
					} else if (Array.isArray(responseData)) {
						sites = responseData;
					}

					for (const site of sites) {
						if (site.id && site.name) {
							options.push({
								name: site.name,
								value: site.id.toString(),
							});
						}
					}
					return options.sort((a, b) => a.name.localeCompare(b.name));
				} catch (error) {
					return [];
				}
			},
		getClientUsers: async function(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
			const { apiRequest } = await import('./transport');
			let clientIdParam = this.getCurrentNodeParameter('client_id');
			if (!clientIdParam) {
				clientIdParam = this.getCurrentNodeParameter('updateFields.client_id');
			}
			if (!clientIdParam) {
				clientIdParam = this.getCurrentNodeParameter('additionalFields.client_id');
			}
			const clientId = typeof clientIdParam === 'string' ? parseInt(clientIdParam, 10) : (clientIdParam as number);

			if (!clientId || clientId === 0 || typeof clientId !== 'number' || isNaN(clientId)) {
				return [];
			}

				try {
					const requestMethod = 'GET';
					const endpoint = '/Users';
					const body = {};
					const qs = { client_id: clientId };

					const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

					const options: INodePropertyOptions[] = [];
					let users = [];
					if (responseData && responseData.users) {
						users = Array.isArray(responseData.users) ? responseData.users : [responseData.users];
					} else if (Array.isArray(responseData)) {
						users = responseData;
					}

					for (const user of users) {
						if (user.id && user.name) {
							options.push({
								name: user.name,
								value: user.id.toString(),
							});
						}
					}
					return options.sort((a, b) => a.name.localeCompare(b.name));
				} catch (error) {
				return [];
				}
			},
		getTeams: async function(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
			const { apiRequest } = await import('./transport');
			try {
				const requestMethod = 'GET';
				const endpoint = '/Team';
				const body = {};
				const qs = {
					showall: true,
					can_edit_only: true,
					includeenabled: true,
					includedisabled: true,
				};

				const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

				const options: INodePropertyOptions[] = [];
				const teams = Array.isArray(responseData) ? responseData : [responseData];

				for (const team of teams) {
					if (team.id && team.name) {
						options.push({
							name: team.name,
							value: team.id.toString(),
						});
					}
				}
				return options.sort((a, b) => a.name.localeCompare(b.name));
			} catch (error) {
				return [];
			}
		},
		getOutcomes: async function(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
			const { apiRequest } = await import('./transport');
			try {
				const responseData = await apiRequest.call(this, 'GET', '/Outcome', {}, {});
				const outcomes = Array.isArray(responseData) ? responseData : [];
				const options: INodePropertyOptions[] = [];
				for (const outcome of outcomes) {
					if (outcome?.id != null) {
						options.push({
							name: (outcome.name as string) || `Outcome ${outcome.id}`,
							value: outcome.id as number,
						});
					}
				}
				return options.sort((a, b) => a.name.localeCompare(b.name));
			} catch {
				return [];
			}
		},
		getReports: async function(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
			const { apiRequest } = await import('./transport');
			try {
				const responseData = await apiRequest.call(this, 'GET', '/Report', {}, { count: 100 });
				const reports = Array.isArray(responseData) ? responseData : [responseData];
				const options: INodePropertyOptions[] = [];
				for (const report of reports) {
					if (report?.id) {
						const name =
							(report.name as string) ||
							(report.reportname as string) ||
							`Report ${report.id}`;
						options.push({
							name,
							value: report.id.toString(),
						});
					}
				}
				return options.sort((a, b) => a.name.localeCompare(b.name));
			} catch {
				return [];
			}
		},
		getDepartments: async function(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
			const { apiRequest } = await import('./transport');
			try {
				const requestMethod = 'GET';
				const endpoint = '/Organisation';
				const body = {};
				const qs = {};

				const orgsResponse = await apiRequest.call(this, requestMethod, endpoint, body, qs);

				const options: INodePropertyOptions[] = [];
				const organisations = Array.isArray(orgsResponse) ? orgsResponse : [orgsResponse];

				for (const org of organisations) {
					if (org.id) {
						const orgEndpoint = `/Organisation/${org.id}`;
						const orgQs = { includedetails: true };
						const orgDetails = await apiRequest.call(this, requestMethod, orgEndpoint, body, orgQs);

						if (orgDetails.departments && Array.isArray(orgDetails.departments)) {
							for (const dept of orgDetails.departments) {
								if (dept.id && dept.name) {
									options.push({
										name: dept.name,
										value: dept.id.toString(),
									});
								}
							}
						}
					}
				}
				return options.sort((a, b) => a.name.localeCompare(b.name));
			} catch (error) {
				return [];
			}
		},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const { router } = await import('./actions/router');
		return await router.call(this);
	}
}
