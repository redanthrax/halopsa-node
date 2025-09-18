import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteTimesheet from './delete';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, update, deleteTimesheet as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['timesheet'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new timesheet',
				action: 'Create a timesheet',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a timesheet',
				action: 'Delete a timesheet',
			},
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Get a timesheet by ID',
				action: 'Get a timesheet by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many timesheets',
				action: 'Get many timesheets',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a timesheet',
				action: 'Update a timesheet',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteTimesheet.description,
];