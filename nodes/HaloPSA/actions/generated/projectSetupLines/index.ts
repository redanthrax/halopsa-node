import * as create from './create';
import { INodeProperties } from 'n8n-workflow';

export { create };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['projectSetupLines'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create Project Setup Lines' },
		],
		default: 'create',
	},
	...create.description,
];
