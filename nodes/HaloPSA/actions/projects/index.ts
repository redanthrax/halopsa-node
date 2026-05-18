import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteProject from './delete';

import * as recordView from './recordView';
import { INodeProperties } from 'n8n-workflow';

export {
	recordView, getAll, getById, create, update, deleteProject as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['projects'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new project',
				action: 'Create a project',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a project',
				action: 'Delete a project',
			},
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Get a project by ID',
				action: 'Get a project by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many projects',
				action: 'Get many projects',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a project',
				action: 'Update a project',
			},
			{
				name: 'Record View',
				value: 'recordView',
				description: 'Record that a project was viewed',
				action: 'Record a project view',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...recordView.description,
	...deleteProject.description,
];
