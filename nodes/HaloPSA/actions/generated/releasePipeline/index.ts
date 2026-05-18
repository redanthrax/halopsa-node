import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['releasePipeline'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Release Pipeline' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Release Pipeline' },
			{ name: 'Create', value: 'create', action: 'Create Release Pipeline' },
			{ name: 'Delete', value: 'delete', action: 'Delete Release Pipeline' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
