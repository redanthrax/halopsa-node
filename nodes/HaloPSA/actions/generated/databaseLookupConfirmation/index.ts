import * as getById from './getById';
import * as create from './create';
import { INodeProperties } from 'n8n-workflow';

export { getById, create };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['databaseLookupConfirmation'] } },
		options: [
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Database Lookup Confirmation' },
			{ name: 'Create', value: 'create', action: 'Create Database Lookup Confirmation' },
		],
		default: 'getById',
	},
	...getById.description,
	...create.description,
];
