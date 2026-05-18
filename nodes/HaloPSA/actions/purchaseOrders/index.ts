import * as create from './create';
import * as deletePurchaseOrder from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import * as update from './update';

import { INodeProperties } from 'n8n-workflow';

export { create, deletePurchaseOrder as delete, getAll, getById, update };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['purchaseOrders'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a purchase order' },
			{ name: 'Delete', value: 'delete', action: 'Delete a purchase order' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a purchase order by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many purchase orders' },
			{ name: 'Update', value: 'update', action: 'Update a purchase order' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...deletePurchaseOrder.description,
];
