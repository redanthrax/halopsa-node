import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Publish Profiles ID', name: 'publishProfileId', type: 'number', required: true,
		displayOptions: { show: { resource: ['publishProfiles'], operation: ['getById'] } }, default: 0 },
];
