import * as federatedcredentials from './federatedcredentials';
import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { federatedcredentials, getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['application'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Application' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Application' },
			{ name: 'Create', value: 'create', action: 'Create Application' },
			{ name: 'Delete', value: 'delete', action: 'Delete Application' },
			{ name: 'federatedcredentials', value: 'federatedcredentials', action: 'federatedcredentials Application' },
		],
		default: 'getAll',
	},
	...federatedcredentials.description,
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
