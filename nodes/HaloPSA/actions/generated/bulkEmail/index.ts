import * as getAll from './getAll';
import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['bulkEmail'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Bulk Email' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Bulk Email' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
];
