import * as create from './create';
import * as deleteTopLevel from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { create, deleteTopLevel as delete, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['topLevels'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a top level tree node' },
			{ name: 'Delete', value: 'delete', action: 'Delete a top level tree node' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a top level node by id' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many top level nodes' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteTopLevel.description,
];
