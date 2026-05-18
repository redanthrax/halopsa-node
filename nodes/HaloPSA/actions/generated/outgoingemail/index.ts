import * as getAll from './getAll';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['outgoingemail'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Outgoingemail' },
			{ name: 'Create', value: 'create', action: 'Create Outgoingemail' },
			{ name: 'Delete', value: 'delete', action: 'Delete Outgoingemail' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...create.description,
	...deleteOp.description,
];
