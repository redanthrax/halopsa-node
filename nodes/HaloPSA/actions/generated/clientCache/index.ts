import * as getAll from './getAll';
import { INodeProperties } from 'n8n-workflow';

export { getAll };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['clientCache'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Client Cache' },
		],
		default: 'getAll',
	},
	...getAll.description,
];
