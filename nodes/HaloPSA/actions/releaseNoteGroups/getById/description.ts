import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Group ID', name: 'groupId', type: 'number', required: true,
		displayOptions: { show: { resource: ['releaseNoteGroups'], operation: ['getById'] } }, default: 0 },
	{ displayName: 'Include Details', name: 'includeDetails', type: 'boolean',
		displayOptions: { show: { resource: ['releaseNoteGroups'], operation: ['getById'] } }, default: false },
];
