import * as getAll from './getAll';
import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['setupTabGroup'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Setup Tab Group' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Setup Tab Group' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
];
