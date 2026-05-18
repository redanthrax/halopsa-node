import * as getById from './getById';
import * as create from './create';
import { INodeProperties } from 'n8n-workflow';

export { getById, create };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['bookmark'] } },
		options: [
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Bookmark' },
			{ name: 'Create', value: 'create', action: 'Create Bookmark' },
		],
		default: 'getById',
	},
	...getById.description,
	...create.description,
];
