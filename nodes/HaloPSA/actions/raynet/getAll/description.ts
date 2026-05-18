import { INodeProperties } from 'n8n-workflow';

export const getAllDescription: INodeProperties[] = [
	{ displayName: 'No Parameters', name: 'notice', type: 'notice',
		displayOptions: { show: { resource: ['raynet'], operation: ['getAll'] } },
		default: '', description: 'Fetches Raynet data from GET /Raynet/Get' },
];
