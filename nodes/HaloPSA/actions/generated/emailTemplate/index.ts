import * as preview from './preview';
import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { preview, getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['emailTemplate'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Email Template' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Email Template' },
			{ name: 'Create', value: 'create', action: 'Create Email Template' },
			{ name: 'Delete', value: 'delete', action: 'Delete Email Template' },
			{ name: 'preview', value: 'preview', action: 'preview Email Template' },
		],
		default: 'getAll',
	},
	...preview.description,
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
