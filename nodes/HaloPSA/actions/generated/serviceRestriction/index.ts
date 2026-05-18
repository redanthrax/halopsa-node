import * as getAll from './getAll';
import { INodeProperties } from 'n8n-workflow';

export { getAll };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['serviceRestriction'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Service Restriction' },
		],
		default: 'getAll',
	},
	...getAll.description,
];
