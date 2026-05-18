import * as manage from './manage';
import * as deleteParent from './deleteParent';
import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { manage, deleteParent, getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['cSPConsumptionData'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many CSPConsumption Data' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID CSPConsumption Data' },
			{ name: 'Create', value: 'create', action: 'Create CSPConsumption Data' },
			{ name: 'Delete', value: 'delete', action: 'Delete CSPConsumption Data' },
			{ name: 'manage', value: 'manage', action: 'manage CSPConsumption Data' },
			{ name: 'deleteParent', value: 'deleteParent', action: 'deleteParent CSPConsumption Data' },
		],
		default: 'getAll',
	},
	...manage.description,
	...deleteParent.description,
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
