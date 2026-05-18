import * as password from './password';
import * as getAll from './getAll';
import * as create from './create';
import { INodeProperties } from 'n8n-workflow';

export { password, getAll, create };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['licenseInfo'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many License Info' },
			{ name: 'Create', value: 'create', action: 'Create License Info' },
			{ name: 'password', value: 'password', action: 'password License Info' },
		],
		default: 'getAll',
	},
	...password.description,
	...getAll.description,
	...create.description,
];
