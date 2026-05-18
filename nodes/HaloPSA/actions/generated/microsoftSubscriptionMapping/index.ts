import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['microsoftSubscriptionMapping'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Microsoft Subscription Mapping' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Microsoft Subscription Mapping' },
			{ name: 'Create', value: 'create', action: 'Create Microsoft Subscription Mapping' },
			{ name: 'Delete', value: 'delete', action: 'Delete Microsoft Subscription Mapping' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
