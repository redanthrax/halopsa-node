import * as create from './create';
import { INodeProperties } from 'n8n-workflow';

export { create };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['impersonationRequest'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create Impersonation Request' },
		],
		default: 'create',
	},
	...create.description,
];
