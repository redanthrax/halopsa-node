import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Chat Profile ID', name: 'chatProfileId', type: 'number', required: true,
		displayOptions: { show: { resource: ['chatProfile'], operation: ['getById'] } }, default: 0 },
];
