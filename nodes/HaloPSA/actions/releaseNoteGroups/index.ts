import * as create from './create';
import * as deleteGroup from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { create, deleteGroup as delete, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['releaseNoteGroups'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a release note group' },
			{ name: 'Delete', value: 'delete', action: 'Delete a release note group' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a release note group by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many release note groups' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteGroup.description,
];
