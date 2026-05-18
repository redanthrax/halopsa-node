import { INodeProperties } from 'n8n-workflow';

export const getAllDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: { show: { resource: ['ticketApprovals'], operation: ['getAll'] } },
		default: false,
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		description: 'Max number of results to return',
		displayOptions: { show: { resource: ['ticketApprovals'], operation: ['getAll'], returnAll: [false] } },
		typeOptions: { minValue: 1 },
		default: 50,
	},
	{
		displayName: 'Ticket ID',
		name: 'ticketId',
		type: 'number',
		displayOptions: { show: { resource: ['ticketApprovals'], operation: ['getAll'] } },
		default: 0,
		description: 'Filter by ticket (0 = no filter)',
	},
	{
		displayName: 'Mine Only',
		name: 'mineOnly',
		type: 'boolean',
		displayOptions: { show: { resource: ['ticketApprovals'], operation: ['getAll'] } },
		default: false,
		description: 'Whether to return only approvals assigned to the current user',
	},
];
