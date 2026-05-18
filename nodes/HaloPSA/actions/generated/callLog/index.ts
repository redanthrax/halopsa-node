import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['callLog'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Call Log' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Call Log' },
			{ name: 'Create', value: 'create', action: 'Create Call Log' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
];
