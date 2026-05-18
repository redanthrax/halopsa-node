import * as getAll from './getAll';
import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['chargeRate'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Charge Rate' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Charge Rate' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
];
