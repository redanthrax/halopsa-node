import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Azure Delta ID', name: 'azureDeltaId', type: 'number', required: true,
		displayOptions: { show: { resource: ['azureDelta'], operation: ['delete'] } }, default: 0 },
];
