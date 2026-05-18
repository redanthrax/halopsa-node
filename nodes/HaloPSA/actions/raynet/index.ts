import * as getAll from './getAll';
import { INodeProperties } from 'n8n-workflow';

export { getAll };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['raynet'] } },
		options: [
			{ name: 'Get', value: 'getAll', action: 'Get Raynet data' },
		],
		default: 'getAll',
	},
	...getAll.description,
];
