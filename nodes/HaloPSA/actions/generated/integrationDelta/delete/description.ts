import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Integration Delta ID', name: 'integrationDeltaId', type: 'number', required: true,
		displayOptions: { show: { resource: ['integrationDelta'], operation: ['delete'] } }, default: 0 },
];
