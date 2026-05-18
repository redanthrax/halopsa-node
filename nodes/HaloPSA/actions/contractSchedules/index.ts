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
			{ name: 'Create', value: 'create', action: 'Create a ContractSchedule' },
			{ name: 'Delete', value: 'delete', action: 'Delete a ContractSchedule' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a ContractSchedule by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many ContractSchedules' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteContractSchedule.description,
];
