import * as clearCache from './clearCache';
import * as create from './create';
import * as deleteLookup from './delete';
import * as getAll from './getAll';
import * as getById from './getById';

import { INodeProperties } from 'n8n-workflow';

export { clearCache, create, deleteLookup as delete, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['lookups'] } },
		options: [
			{ name: 'Clear Cache', value: 'clearCache', action: 'Clear the lookup cache' },
			{ name: 'Create', value: 'create', action: 'Create a lookup value' },
			{ name: 'Delete', value: 'delete', action: 'Delete a lookup value' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a lookup value by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many lookup values' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteLookup.description,
	...clearCache.description,
];
