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
		displayOptions: {
			show: {
				resource: ['contracts'],
			},
		},
		options: [
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Get a client contract by ID',
				action: 'Get a client contract by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many client contracts',
				action: 'Get many client contracts',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
];
