import * as getById from './getById';
import * as create from './create';
import { INodeProperties } from 'n8n-workflow';

export { getById, create };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['faultsForecasting'] } },
		options: [
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Faults Forecasting' },
			{ name: 'Create', value: 'create', action: 'Create Faults Forecasting' },
		],
		default: 'getById',
	},
	...getById.description,
	...create.description,
];
