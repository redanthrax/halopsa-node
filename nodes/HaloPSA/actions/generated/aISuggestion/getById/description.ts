import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'AISuggestion ID', name: 'aISuggestionId', type: 'number', required: true,
		displayOptions: { show: { resource: ['aISuggestion'], operation: ['getById'] } }, default: 0 },
];
