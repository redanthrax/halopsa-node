import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Outcome ID', name: 'outcomeId', type: 'number', required: true,
		displayOptions: { show: { resource: ['outcomes'], operation: ['delete'] } }, default: 0 },
];
