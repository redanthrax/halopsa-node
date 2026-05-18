import * as getAll from './getAll';
import * as create from './create';
import { INodeProperties } from 'n8n-workflow';

export { getAll, create };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['mcp'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many mcp' },
			{ name: 'Create', value: 'create', action: 'Create mcp' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...create.description,
];
