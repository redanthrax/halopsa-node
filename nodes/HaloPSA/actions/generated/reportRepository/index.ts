import * as reportCategories from './reportCategories';
import * as getAll from './getAll';
import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { reportCategories, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['reportRepository'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Report Repository' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Report Repository' },
			{ name: 'ReportCategories', value: 'reportCategories', action: 'ReportCategories Report Repository' },
		],
		default: 'getAll',
	},
	...reportCategories.description,
	...getAll.description,
	...getById.description,
];
