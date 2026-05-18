import * as create from './create';
import { INodeProperties } from 'n8n-workflow';

export { create };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['chatMatchingData'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create Chat Matching Data' },
		],
		default: 'create',
	},
	...create.description,
];
