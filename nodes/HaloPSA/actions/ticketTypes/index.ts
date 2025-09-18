import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteTicketType from './delete';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, update, deleteTicketType as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['ticketTypes'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new ticket type',
				action: 'Create a ticket type',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a ticket type',
				action: 'Delete a ticket type',
			},
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Get a ticket type by ID',
				action: 'Get a ticket type by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many ticket types',
				action: 'Get many ticket types',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a ticket type',
				action: 'Update a ticket type',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteTicketType.description,
];