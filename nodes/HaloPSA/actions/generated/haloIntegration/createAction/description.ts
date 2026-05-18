import { INodeProperties } from 'n8n-workflow';

export const createActionDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['haloIntegration'], operation: ['createAction'] } }, default: {} },
];
