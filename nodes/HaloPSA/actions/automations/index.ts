import * as getAll from './getAll';
import * as getById from './getById';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['automations'] } },
		options: [
			{ name: 'Get by ID', value: 'getById', action: 'Get an automation by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many automations' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
];
