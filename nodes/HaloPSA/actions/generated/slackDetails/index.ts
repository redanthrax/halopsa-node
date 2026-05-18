import * as uninstall from './uninstall';
import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { uninstall, getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['slackDetails'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Slack Details' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Slack Details' },
			{ name: 'Create', value: 'create', action: 'Create Slack Details' },
			{ name: 'Delete', value: 'delete', action: 'Delete Slack Details' },
			{ name: 'Uninstall', value: 'uninstall', action: 'Uninstall Slack Details' },
		],
		default: 'getAll',
	},
	...uninstall.description,
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
