import * as create from './create';
import * as deleteTranscription from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { create, deleteTranscription as delete, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['transcriptionStore'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a transcription record' },
			{ name: 'Delete', value: 'delete', action: 'Delete a transcription record' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a transcription by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many transcriptions' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteTranscription.description,
];
