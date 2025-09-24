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

import {
	IExecuteFunctions,
	ILoadOptionsFunctions,
	INodeExecutionData,
	INodePropertyOptions,
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
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
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,
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
									description: ticketType.description || '',
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
									description: status.shortname || '',
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
					projects: 1, // Projects use same typeid as tickets in FieldInfo
				};
				
				const typeid = typeMapping[resource];
				if (!typeid) {
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
									description: agent.emailaddress || agent.login || '',
								});
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
