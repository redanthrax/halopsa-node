import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Group ID', name: 'groupId', type: 'number', required: true,
		displayOptions: { show: { resource: ['releaseNoteGroups'], operation: ['delete'] } }, default: 0 },
];
