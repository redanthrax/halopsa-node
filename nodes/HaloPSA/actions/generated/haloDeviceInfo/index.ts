import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['haloDeviceInfo'] } },
		options: [
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Halo Device Info' },
			{ name: 'Create', value: 'create', action: 'Create Halo Device Info' },
			{ name: 'Delete', value: 'delete', action: 'Delete Halo Device Info' },
		],
		default: 'getById',
	},
	...getById.description,
	...create.description,
	...deleteOp.description,
];
