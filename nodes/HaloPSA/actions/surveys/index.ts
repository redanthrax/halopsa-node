import * as create from './create';
import * as deleteSurvey from './delete';
import * as getAll from './getAll';
import * as getById from './getById';

import { INodeProperties } from 'n8n-workflow';

export { create, deleteSurvey as delete, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['surveys'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a feedback record' },
			{ name: 'Delete', value: 'delete', action: 'Delete a feedback record' },
			{ name: 'Get by ID', value: 'getById', action: 'Get feedback by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many feedback records' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteSurvey.description,
];
