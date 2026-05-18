import * as create from './create';
import * as deleteTeam from './delete';
import * as getAll from './getAll';
import * as getById from './getById';

import { INodeProperties } from 'n8n-workflow';

export { create, deleteTeam as delete, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['teams'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a team' },
			{ name: 'Delete', value: 'delete', action: 'Delete a team' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a team by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many teams' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteTeam.description,
];
