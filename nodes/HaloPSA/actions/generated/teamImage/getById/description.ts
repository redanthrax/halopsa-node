import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Team Image ID', name: 'teamImageId', type: 'number', required: true,
		displayOptions: { show: { resource: ['teamImage'], operation: ['getById'] } }, default: 0 },
];
