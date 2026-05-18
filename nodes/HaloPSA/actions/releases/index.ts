import * as create from './create';
import * as deleteRelease from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { create, deleteRelease as delete, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['releases'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a release' },
			{ name: 'Delete', value: 'delete', action: 'Delete a release' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a release by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many releases' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteRelease.description,
];
