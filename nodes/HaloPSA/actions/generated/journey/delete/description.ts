import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Journey ID', name: 'journeyId', type: 'number', required: true,
		displayOptions: { show: { resource: ['journey'], operation: ['delete'] } }, default: 0 },
];
