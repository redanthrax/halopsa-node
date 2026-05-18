import * as create from './create';
import * as deleteContractSchedule from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { create, deleteContractSchedule as delete, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['contractSchedules'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a contract schedule' },
			{ name: 'Delete', value: 'delete', action: 'Delete a contract schedule' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a contract schedule by id' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many contract schedules' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteContractSchedule.description,
];
