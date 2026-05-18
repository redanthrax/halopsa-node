import * as create from './create';
import * as deleteQuotation from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import * as update from './update';

import * as recordView from './recordView';
import { INodeProperties } from 'n8n-workflow';

export {
	recordView, create, deleteQuotation as delete, getAll, getById, update };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['quotations'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a quotation' },
			{ name: 'Delete', value: 'delete', action: 'Delete a quotation' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a quotation by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many quotations' },
			{ name: 'Update', value: 'update', action: 'Update a quotation' },
			{ name: 'Record View', value: 'recordView', action: 'Record a quotation view' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...recordView.description,
	...deleteQuotation.description,
];
