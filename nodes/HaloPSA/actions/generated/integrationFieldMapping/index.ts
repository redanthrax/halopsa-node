import * as getAll from './getAll';
import { INodeProperties } from 'n8n-workflow';

export { getAll };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['integrationFieldMapping'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Integration Field Mapping' },
		],
		default: 'getAll',
	},
	...getAll.description,
];
