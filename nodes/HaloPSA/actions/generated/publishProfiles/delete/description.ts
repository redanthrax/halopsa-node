import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Publish Profiles ID', name: 'publishProfileId', type: 'number', required: true,
		displayOptions: { show: { resource: ['publishProfiles'], operation: ['delete'] } }, default: 0 },
];
