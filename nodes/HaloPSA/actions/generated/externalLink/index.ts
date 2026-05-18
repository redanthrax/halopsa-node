import * as generate from './generate';
import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { generate, getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['externalLink'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many External Link' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID External Link' },
			{ name: 'Create', value: 'create', action: 'Create External Link' },
			{ name: 'Delete', value: 'delete', action: 'Delete External Link' },
			{ name: 'Generate', value: 'generate', action: 'Generate External Link' },
		],
		default: 'getAll',
	},
	...generate.description,
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
