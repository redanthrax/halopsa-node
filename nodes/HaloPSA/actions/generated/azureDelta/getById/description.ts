import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Azure Delta ID', name: 'azureDeltaId', type: 'number', required: true,
		displayOptions: { show: { resource: ['azureDelta'], operation: ['getById'] } }, default: 0 },
];
