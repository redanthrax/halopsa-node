import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['features'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Features' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Features' },
			{ name: 'Create', value: 'create', action: 'Create Features' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
];
