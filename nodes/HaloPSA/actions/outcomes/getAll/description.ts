import { INodeProperties } from 'n8n-workflow';

export const getAllDescription: INodeProperties[] = [
	{ displayName: 'Return All', name: 'returnAll', type: 'boolean',
																																																	description: 'Whether to return all results or only up to a given limit',
		displayOptions: { show: { resource: ['outcomes'], operation: ['getAll'] } }, default: false },
	{ displayName: 'Limit', name: 'limit', type: 'number',
																																								description: 'Max number of results to return',
		displayOptions: { show: { resource: ['outcomes'], operation: ['getAll'], returnAll: [false] } },
		typeOptions: { minValue: 1 }, default: 50 },
	{ displayName: 'Ticket Type ID', name: 'ticketTypeId', type: 'number',
		displayOptions: { show: { resource: ['outcomes'], operation: ['getAll'] } }, default: 0 },
	{ displayName: 'Workflow ID', name: 'workflowId', type: 'number',
		displayOptions: { show: { resource: ['outcomes'], operation: ['getAll'] } }, default: 0 },
	{ displayName: 'Quick Only', name: 'quickOnly', type: 'boolean',
		displayOptions: { show: { resource: ['outcomes'], operation: ['getAll'] } }, default: false },
	{ displayName: 'Show Hidden', name: 'showHidden', type: 'boolean',
		displayOptions: { show: { resource: ['outcomes'], operation: ['getAll'] } }, default: false },
	{ displayName: 'Exclude System Actions', name: 'excludeSystemActions', type: 'boolean',
		displayOptions: { show: { resource: ['outcomes'], operation: ['getAll'] } }, default: false },
];
