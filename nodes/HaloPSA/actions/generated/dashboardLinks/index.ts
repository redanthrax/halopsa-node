import * as filterValues from './filterValues';
import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { filterValues, getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['dashboardLinks'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Dashboard Links' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Dashboard Links' },
			{ name: 'Create', value: 'create', action: 'Create Dashboard Links' },
			{ name: 'Delete', value: 'delete', action: 'Delete Dashboard Links' },
			{ name: 'FilterValues', value: 'filterValues', action: 'FilterValues Dashboard Links' },
		],
		default: 'getAll',
	},
	...filterValues.description,
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
