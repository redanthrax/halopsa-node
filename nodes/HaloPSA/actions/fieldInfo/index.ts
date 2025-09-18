import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteFieldInfo from './delete';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, update, deleteFieldInfo as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['fieldInfo'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new field info',
				action: 'Create a field info',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a field info',
				action: 'Delete a field info',
			},
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Get a field info by ID',
				action: 'Get a field info by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many field info records',
				action: 'Get many field info records',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a field info',
				action: 'Update a field info',
			},
		],
		default: 'getAll',
	},
	...getAll.description.getALLDescription,
	...getById.description.getByIdDescription,
	...create.description.createDescription,
	...update.description.updateDescription,
	...deleteFieldInfo.description.deleteDescription,
];