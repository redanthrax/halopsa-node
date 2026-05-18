import * as getAll from './getAll';
import * as getById from './getById';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['singleSignOnAttempt'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Single Sign On Attempt' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Single Sign On Attempt' },
			{ name: 'Delete', value: 'delete', action: 'Delete Single Sign On Attempt' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...deleteOp.description,
];
