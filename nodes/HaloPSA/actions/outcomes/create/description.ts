import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['outcomes'], operation: ['create'] } }, default: {},
		description: 'TOutcome object or array for POST /Outcome' },
];
