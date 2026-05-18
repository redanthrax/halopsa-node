import * as auth from './auth';
import * as getAll from './getAll';
import { INodeProperties } from 'n8n-workflow';

export { auth, getAll };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['adobeCommerceIntegration'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Adobe Commerce Integration' },
			{ name: 'auth', value: 'auth', action: 'auth Adobe Commerce Integration' },
		],
		default: 'getAll',
	},
	...auth.description,
	...getAll.description,
];
