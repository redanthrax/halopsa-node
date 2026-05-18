import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['agentImage'] } },
		options: [
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Agent Image' },
		],
		default: 'getById',
	},
	...getById.description,
];
