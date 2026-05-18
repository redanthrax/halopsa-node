import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Integration Delta ID', name: 'integrationDeltaId', type: 'number', required: true,
		displayOptions: { show: { resource: ['integrationDelta'], operation: ['getById'] } }, default: 0 },
];
