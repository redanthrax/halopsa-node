import * as deleteAutomation from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import * as runRunbook from './runRunbook';

import { INodeProperties } from 'n8n-workflow';

export { deleteAutomation as delete, getAll, getById, runRunbook };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['automations'] } },
		options: [
			{ name: 'Delete', value: 'delete', action: 'Delete an automation' },
			{ name: 'Get by ID', value: 'getById', action: 'Get an automation by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many automations' },
			{ name: 'Run Runbook', value: 'runRunbook', action: 'Run an automation runbook' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...deleteAutomation.description,
	...runRunbook.description,
];
