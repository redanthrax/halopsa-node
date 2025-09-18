import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteAgent from './delete';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, update, deleteAgent as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['agents'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new agent',
				action: 'Create an agent',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an agent',
				action: 'Delete an agent',
			},
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Get an agent by ID',
				action: 'Get an agent by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many agents',
				action: 'Get many agents',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an agent',
				action: 'Update an agent',
			},
		],
		default: 'getAll',
	},
	...getAll.getALLDescription,
	...getById.getByIdDescription,
	...create.description,
	...update.description,
	...deleteAgent.description,
];