import * as create from './create';
import * as deleteProcess from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { create, deleteProcess as delete, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['approvalProcesses'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a approval process' },
			{ name: 'Delete', value: 'delete', action: 'Delete a approval process' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a approval process by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many approval processs' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteProcess.description,
];
