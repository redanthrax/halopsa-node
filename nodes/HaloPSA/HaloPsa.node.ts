import * as agents from './actions/agents';
import * as assets from './actions/assets';
import * as client from './actions/client';
import * as invoices from './actions/invoices';
import * as sites from './actions/sites';
import * as tickets from './actions/tickets';
import * as ticketStatuses from './actions/ticketStatuses';
import * as ticketTypes from './actions/ticketTypes';
import * as timesheet from './actions/timesheet';
import * as timesheetEvent from './actions/timesheetEvent';

import {
	IExecuteFunctions,
	ILoadOptionsFunctions,
	INodePropertyOptions,
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
} from 'n8n-workflow';

import { router } from './actions/router';

export class HaloPsa implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'HaloPSA Complete',
		name: 'haloPsa',
		icon: 'file:halopsa.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get data from the HaloPSA API',
		defaults: {
			name: 'HaloPSA Complete',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'haloPSAApi',
				required: true,
			},
		],
		requestDefaults: {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
			options: [
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
					name: 'Invoice',
					value: 'invoices',
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
				],
				default: 'tickets',
			},
			...agents.description,
			...assets.description,
			...client.description,
			...invoices.description,
			...sites.description,
			...tickets.description,
			...ticketStatuses.description,
			...ticketTypes.description,
			...timesheet.description,
			...timesheetEvent.description,
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
									description: ticketType.description || '',
								});
							}
						}
					}
					return options.sort((a, b) => a.name.localeCompare(b.name));
				} catch (error) {
					// Return empty array if there's an error loading options
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
					// Return empty array if there's an error loading options
					return [];
				}
			},
		},
	};

	async execute(this: IExecuteFunctions) {
		return await router.call(this);
	}
}
