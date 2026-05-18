import * as create from './create';
import * as deleteOpportunity from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import * as update from './update';

import * as recordView from './recordView';
import { INodeProperties } from 'n8n-workflow';

export {
	recordView, create, deleteOpportunity as delete, getAll, getById, update };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['opportunities'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create an opportunity' },
			{ name: 'Delete', value: 'delete', action: 'Delete an opportunity' },
			{ name: 'Get by ID', value: 'getById', action: 'Get an opportunity by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many opportunities' },
			{ name: 'Record View', value: 'recordView', action: 'Record an opportunity view' },
			{ name: 'Update', value: 'update', action: 'Update an opportunity' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...recordView.description,
	...deleteOpportunity.description,
];
