import * as create from './create';
import * as deleteAppointment from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import * as update from './update';

import { INodeProperties } from 'n8n-workflow';

export { create, deleteAppointment as delete, getAll, getById, update };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['appointments'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create an appointment' },
			{ name: 'Delete', value: 'delete', action: 'Delete an appointment' },
			{ name: 'Get by ID', value: 'getById', action: 'Get an appointment by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many appointments' },
			{ name: 'Update', value: 'update', action: 'Update an appointment' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteAppointment.description,
];
