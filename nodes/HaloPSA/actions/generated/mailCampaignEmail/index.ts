import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['mailCampaignEmail'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Mail Campaign Email' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Mail Campaign Email' },
			{ name: 'Create', value: 'create', action: 'Create Mail Campaign Email' },
			{ name: 'Delete', value: 'delete', action: 'Delete Mail Campaign Email' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
