import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['agentPresenceSubscription'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Agent Presence Subscription' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Agent Presence Subscription' },
			{ name: 'Create', value: 'create', action: 'Create Agent Presence Subscription' },
			{ name: 'Delete', value: 'delete', action: 'Delete Agent Presence Subscription' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
