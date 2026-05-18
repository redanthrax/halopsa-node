import * as get from './get';
import { INodeProperties } from 'n8n-workflow';

export { get };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['eracent'] } },
		options: [
			{ name: 'Get', value: 'get', action: 'Get Eracent' },
		],
		default: 'get',
	},
	...get.description,
];
