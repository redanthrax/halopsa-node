import * as create from './create';
import * as createBooking from './createBooking';
import * as deleteAppointment from './delete';
import * as generate from './generate';
import * as getAll from './getAll';
import * as getBooking from './getBooking';
import * as getById from './getById';
import * as update from './update';

import { INodeProperties } from 'n8n-workflow';

export {
	create,
	createBooking,
	deleteAppointment as delete,
	generate,
	getAll,
	getBooking,
	getById,
	update,
};

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['appointments'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create an appointment' },
			{ name: 'Create Booking', value: 'createBooking', action: 'Create appointment booking' },
			{ name: 'Delete', value: 'delete', action: 'Delete an appointment' },
			{ name: 'Generate', value: 'generate', action: 'Generate appointments' },
			{ name: 'Get Booking', value: 'getBooking', action: 'Get appointment booking' },
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
	...getBooking.description,
	...createBooking.description,
	...generate.description,
];
