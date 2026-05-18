import * as getAll from './getAll';

import { INodeProperties } from 'n8n-workflow';

export { getAll };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['opportunities'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get sales opportunities',
				action: 'Get many opportunities',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
];
