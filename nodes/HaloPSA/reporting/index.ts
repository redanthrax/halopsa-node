import * as contractUtilisation from './contractUtilisation';
import * as executeQuery from './executeQuery';
import * as getAll from './getAll';
import * as getById from './getById';
import * as run from './run';

import { INodeProperties } from 'n8n-workflow';

export { contractUtilisation, executeQuery, getAll, getById, run };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['reporting'],
			},
		},
		options: [
			{
				name: 'Contract Utilisation',
				value: 'contractUtilisation',
				description: 'Agreement hours charged vs entitlement for a UTC period',
				action: 'Get contract utilisation',
			},
			{
				name: 'Execute SQL Query',
				value: 'executeQuery',
				description: 'Run a read-only SELECT against the reporting database',
				action: 'Execute a reporting SQL query',
			},
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Get a report definition by ID',
				action: 'Get a report by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'List saved report definitions',
				action: 'Get many reports',
			},
			{
				name: 'Run',
				value: 'run',
				description: 'Run a saved report',
				action: 'Run a report',
			},
		],
		default: 'executeQuery',
	},
	...contractUtilisation.contractUtilisationDescription,
	...executeQuery.description,
	...getAll.description,
	...getById.description,
	...run.description,
];
