import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Journey ID', name: 'journeyId', type: 'number', required: true,
		displayOptions: { show: { resource: ['journey'], operation: ['getById'] } }, default: 0 },
];
