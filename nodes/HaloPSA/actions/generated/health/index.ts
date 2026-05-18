import * as hashing from './hashing';
import * as getAll from './getAll';
import { INodeProperties } from 'n8n-workflow';

export { hashing, getAll };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['health'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Health' },
			{ name: 'Hashing', value: 'hashing', action: 'Hashing Health' },
		],
		default: 'getAll',
	},
	...hashing.description,
	...getAll.description,
];
