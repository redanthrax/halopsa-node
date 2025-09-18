import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteAsset from './delete';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, update, deleteAsset as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['assets'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new asset',
				action: 'Create an asset',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an asset',
				action: 'Delete an asset',
			},
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Get an asset by ID',
				action: 'Get an asset by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many assets',
				action: 'Get many assets',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an asset',
				action: 'Update an asset',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteAsset.description,
];