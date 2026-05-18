import * as downtimeCalendar from './downtimeCalendar';
import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { downtimeCalendar, getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['downtime'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Downtime' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Downtime' },
			{ name: 'Create', value: 'create', action: 'Create Downtime' },
			{ name: 'Delete', value: 'delete', action: 'Delete Downtime' },
			{ name: 'DowntimeCalendar', value: 'downtimeCalendar', action: 'DowntimeCalendar Downtime' },
		],
		default: 'getAll',
	},
	...downtimeCalendar.description,
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
