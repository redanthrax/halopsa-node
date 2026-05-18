import * as getAll from './getAll';
import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['taskTrace'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Task Trace' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Task Trace' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
];
