import * as process from './process';
import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { process, getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['incomingWebhook'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Incoming Webhook' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Incoming Webhook' },
			{ name: 'Create', value: 'create', action: 'Create Incoming Webhook' },
			{ name: 'Delete', value: 'delete', action: 'Delete Incoming Webhook' },
			{ name: 'Process', value: 'process', action: 'Process Incoming Webhook' },
		],
		default: 'getAll',
	},
	...process.description,
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
