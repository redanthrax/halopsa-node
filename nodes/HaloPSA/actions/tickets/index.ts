import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteTicket from './delete';
import * as processChildren from './processChildren';
import * as recordView from './recordView';
import * as vote from './vote';

import { INodeProperties } from 'n8n-workflow';

export {
	getAll,
	getById,
	create,
	update,
	deleteTicket as delete,
	processChildren,
	recordView,
	vote,
};

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['tickets'],
			},
		},
	options: [
		{
			name: 'Create',
			value: 'create',
			description: 'Create a new ticket',
			action: 'Create a ticket',
		},
		{
			name: 'Delete',
			value: 'delete',
			description: 'Delete a ticket',
			action: 'Delete a ticket',
		},
		{
			name: 'Get by ID',
			value: 'getById',
			description: 'Get a ticket by ID',
			action: 'Get a ticket by ID',
		},
		{
			name: 'Get Many',
			value: 'getAll',
			description: 'Get many tickets',
			action: 'Get many tickets',
		},
		{
			name: 'Update',
			value: 'update',
			description: 'Update a ticket',
			action: 'Update a ticket',
		},
		{
			name: 'Vote',
			value: 'vote',
			description: 'Submit a vote on a ticket',
			action: 'Vote on a ticket',
		},
		{
			name: 'Record View',
			value: 'recordView',
			description: 'Record that a ticket was viewed',
			action: 'Record a ticket view',
		},
		{
			name: 'Process Children',
			value: 'processChildren',
			description: 'Process child tickets for a parent ticket',
			action: 'Process child tickets',
		},
	],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteTicket.description,
	...vote.description,
	...recordView.description,
	...processChildren.description,
];