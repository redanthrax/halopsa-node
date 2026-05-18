import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['releaseNoteGroups'], operation: ['create'] } }, default: {},
		description: 'ReleaseNoteGroup object or array for POST /ReleaseNoteGroup' },
];
