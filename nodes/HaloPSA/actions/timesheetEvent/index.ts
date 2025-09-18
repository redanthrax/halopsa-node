import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteTimesheetEvent from './delete';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, update, deleteTimesheetEvent as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['timesheetEvent'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new timesheet event',
				action: 'Create a timesheet event',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a timesheet event',
				action: 'Delete a timesheet event',
			},
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Get a timesheet event by ID',
				action: 'Get a timesheet event by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many timesheet events',
				action: 'Get many timesheet events',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a timesheet event',
				action: 'Update a timesheet event',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteTimesheetEvent.description,
];