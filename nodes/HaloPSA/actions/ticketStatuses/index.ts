import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteTicketStatus from './delete';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, update, deleteTicketStatus as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['ticketStatuses'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new ticket status',
				action: 'Create a ticket status',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a ticket status',
				action: 'Delete a ticket status',
			},
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Get a ticket status by ID',
				action: 'Get a ticket status by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many ticket statuses',
				action: 'Get many ticket statuses',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a ticket status',
				action: 'Update a ticket status',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteTicketStatus.description,
];
