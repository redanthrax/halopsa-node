import * as get from './get';
import * as createTicket from './createTicket';
import * as createAction from './createAction';
import { INodeProperties } from 'n8n-workflow';

export { get, createTicket, createAction };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['haloIntegration'] } },
		options: [
			{ name: 'Get', value: 'get', action: 'Get Halo Integration' },
			{ name: 'CreateTicket', value: 'createTicket', action: 'CreateTicket Halo Integration' },
			{ name: 'CreateAction', value: 'createAction', action: 'CreateAction Halo Integration' },
		],
		default: 'get',
	},
	...get.description,
	...createTicket.description,
	...createAction.description,
];
