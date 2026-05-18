import * as setup from './setup';
import * as clearCache from './clearCache';
import * as updateEnc from './updateEnc';
import * as teams from './teams';
import * as getAll from './getAll';
import * as create from './create';
import { INodeProperties } from 'n8n-workflow';

export { setup, clearCache, updateEnc, teams, getAll, create };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['control'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Control' },
			{ name: 'Create', value: 'create', action: 'Create Control' },
			{ name: 'setup', value: 'setup', action: 'setup Control' },
			{ name: 'ClearCache', value: 'clearCache', action: 'ClearCache Control' },
			{ name: 'UpdateEnc', value: 'updateEnc', action: 'UpdateEnc Control' },
			{ name: 'Teams', value: 'teams', action: 'Teams Control' },
		],
		default: 'getAll',
	},
	...setup.description,
	...clearCache.description,
	...updateEnc.description,
	...teams.description,
	...getAll.description,
	...create.description,
];
