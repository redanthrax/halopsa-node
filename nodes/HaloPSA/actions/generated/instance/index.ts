import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['instance'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Instance' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Instance' },
			{ name: 'Create', value: 'create', action: 'Create Instance' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
];
