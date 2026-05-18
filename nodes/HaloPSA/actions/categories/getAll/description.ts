import { INodeProperties } from 'n8n-workflow';

export const getAllDescription: INodeProperties[] = [
	{ displayName: 'Return All', name: 'returnAll', type: 'boolean',
																																																	description: 'Whether to return all results or only up to a given limit',
		displayOptions: { show: { resource: ['categories'], operation: ['getAll'] } }, default: false },
	{ displayName: 'Limit', name: 'limit', type: 'number',
																																								description: 'Max number of results to return',
		displayOptions: { show: { resource: ['categories'], operation: ['getAll'], returnAll: [false] } },
		typeOptions: { minValue: 1 }, default: 50 },
	{ displayName: 'Client ID', name: 'clientId', type: 'number',
		displayOptions: { show: { resource: ['categories'], operation: ['getAll'] } }, default: 0 },
	{ displayName: 'Service ID', name: 'serviceId', type: 'number',
		displayOptions: { show: { resource: ['categories'], operation: ['getAll'] } }, default: 0 },
	{ displayName: 'Team ID', name: 'teamId', type: 'number',
		displayOptions: { show: { resource: ['categories'], operation: ['getAll'] } }, default: 0 },
	{ displayName: 'Team Name', name: 'teamName', type: 'string',
		displayOptions: { show: { resource: ['categories'], operation: ['getAll'] } }, default: '' },
	{ displayName: 'Ticket Type ID', name: 'ticketTypeId', type: 'number',
		displayOptions: { show: { resource: ['categories'], operation: ['getAll'] } }, default: 0 },
	{ displayName: 'Type ID', name: 'typeId', type: 'number',
		displayOptions: { show: { resource: ['categories'], operation: ['getAll'] } }, default: 0 },
];
