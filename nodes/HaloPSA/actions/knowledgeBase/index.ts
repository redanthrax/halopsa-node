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
				resource: ['knowledgeBase'],
			},
		},
		options: [
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Get a knowledge base article by ID',
				action: 'Get a knowledge base article by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many knowledge base articles',
				action: 'Get many knowledge base articles',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
];
