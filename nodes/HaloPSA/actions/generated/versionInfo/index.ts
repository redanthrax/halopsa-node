import * as searchVersionInfo from './searchVersionInfo';
import * as getOneSpotlight from './getOneSpotlight';
import * as spotlight from './spotlight';
import * as integratorHash from './integratorHash';
import * as getAll from './getAll';
import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { searchVersionInfo, getOneSpotlight, spotlight, integratorHash, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['versionInfo'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Version Info' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Version Info' },
			{ name: 'SearchVersionInfo', value: 'searchVersionInfo', action: 'SearchVersionInfo Version Info' },
			{ name: 'getOneSpotlight', value: 'getOneSpotlight', action: 'getOneSpotlight Version Info' },
			{ name: 'Spotlight', value: 'spotlight', action: 'Spotlight Version Info' },
			{ name: 'IntegratorHash', value: 'integratorHash', action: 'IntegratorHash Version Info' },
		],
		default: 'getAll',
	},
	...searchVersionInfo.description,
	...getOneSpotlight.description,
	...spotlight.description,
	...integratorHash.description,
	...getAll.description,
	...getById.description,
];
