import * as actions from './actions/actions';
import * as agents from './actions/agents';
import * as tickets from './actions/tickets';
import * as projects from './actions/projects';
import * as assets from './actions/assets';
import * as sites from './actions/sites';
import * as client from './actions/client';
import * as invoices from './actions/invoices';
import * as timesheet from './actions/timesheet';
import * as timesheetEvent from './actions/timesheetEvent';
import * as ticketStatuses from './actions/ticketStatuses';
import * as ticketTypes from './actions/ticketTypes';
import * as webhooks from './actions/webhooks';
import * as webhookEvents from './actions/webhookEvents';
import * as fieldInfo from './actions/fieldInfo';
import * as users from './actions/users';

import {
	IExecuteFunctions,
	ILoadOptionsFunctions,
	INodeExecutionData,
	INodePropertyOptions,
	INodeType,
	INodeTypeDescription,
	LoggerProxy as Logger,
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
		inputs: ['main'],
		outputs: ['main'],
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
					name: 'Asset',
					value: 'assets',
				},
				{
					name: 'Client',
					value: 'client',
				},
				{
					name: 'Field Info',
					value: 'fieldInfo',
				},
				{
					name: 'Invoice',
					value: 'invoices',
				},
				{
					name: 'Project',
					value: 'projects',
				},
				{
					name: 'Site',
					value: 'sites',
				},
				{
					name: 'Ticket',
					value: 'tickets',
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
			...tickets.description,
			...projects.description,
			...assets.description,
			...sites.description,
			...client.description,
			...invoices.description,
			...timesheet.description,
			...timesheetEvent.description,
			...ticketStatuses.description,
			...ticketTypes.description,
			...webhooks.description,
			...webhookEvents.description,
			...fieldInfo.description,
			...users.description,
		],
	};

	methods = {
		loadOptions: {
		getTicketTypes: async function(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
			Logger.debug('Loading ticket types for HaloPSA node', { node: this.getNode().name });
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
				const { getFieldTypeDescription } = await import('./utils');
				const assettypeIdParam = this.getCurrentNodeParameter('assettype_id_for_fields');
				const assettypeId = typeof assettypeIdParam === 'string' ? parseInt(assettypeIdParam, 10) : (assettypeIdParam as number);

				if (!assettypeId || assettypeId === 0 || typeof assettypeId !== 'number' || isNaN(assettypeId)) {
					return [];
				}

				try {
					const requestMethod = 'GET';
					const endpoint = `/AssetType/${assettypeId}`;
					const body = {};
					const qs = { fieldsandlayoutonly: true, includetyperestrictions: true };

					const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

					const options: INodePropertyOptions[] = [];
					if (responseData && responseData.field_list && Array.isArray(responseData.field_list)) {
						for (const field of responseData.field_list) {
							if (field.id && field.name) {
								options.push({
									name: field.name,
									value: field.id.toString(),
									description: getFieldTypeDescription(field),
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
				Logger.debug('Loading agents for HaloPSA node', { node: this.getNode().name });
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
				Logger.debug('Loading users for HaloPSA node', { node: this.getNode().name });
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
				Logger.debug('Loading clients for HaloPSA node', { node: this.getNode().name });
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
			Logger.debug('Loading sites for HaloPSA node', { node: this.getNode().name });
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
			Logger.debug('Loading users for client in HaloPSA node', { node: this.getNode().name });
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
			Logger.debug('Loading teams for HaloPSA node', { node: this.getNode().name });
			const { apiRequest } = await import('./transport');
			try {
				const requestMethod = 'GET';
				const endpoint = '/team';
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
		getDepartments: async function(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
			Logger.debug('Loading departments for HaloPSA node', { node: this.getNode().name });
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
