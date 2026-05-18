import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'AISuggestion ID', name: 'aISuggestionId', type: 'number', required: true,
		displayOptions: { show: { resource: ['aISuggestion'], operation: ['delete'] } }, default: 0 },
];
