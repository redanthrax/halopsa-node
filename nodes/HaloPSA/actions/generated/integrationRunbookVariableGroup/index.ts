import * as getAll from './getAll';
import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['integrationRunbookVariableGroup'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Integration Runbook Variable Group' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Integration Runbook Variable Group' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
];
