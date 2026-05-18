import * as create from './create';
import * as getAll from './getAll';
import * as getById from './getById';

import { INodeProperties } from 'n8n-workflow';

export { create, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['ticketApprovals'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a ticket approval' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a ticket approval by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many ticket approvals' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
];
