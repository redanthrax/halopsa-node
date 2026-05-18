import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['integrationConfiguration'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Integration Configuration' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Integration Configuration' },
			{ name: 'Create', value: 'create', action: 'Create Integration Configuration' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
];
