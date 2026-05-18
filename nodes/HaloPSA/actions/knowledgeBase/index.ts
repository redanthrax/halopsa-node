import * as create from './create';
import * as deleteArticle from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import * as update from './update';
import * as vote from './vote';

import { INodeProperties } from 'n8n-workflow';

export { create, deleteArticle as delete, getAll, getById, update, vote };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['knowledgeBase'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a knowledge base article' },
			{ name: 'Delete', value: 'delete', action: 'Delete a knowledge base article' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a knowledge base article by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many knowledge base articles' },
			{ name: 'Update', value: 'update', action: 'Update a knowledge base article' },
			{ name: 'Vote', value: 'vote', action: 'Vote on a knowledge base article' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteArticle.description,
	...vote.description,
];
