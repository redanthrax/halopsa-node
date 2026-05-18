import { INodeProperties } from 'n8n-workflow';

export const metricsDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['metrics'] } }, default: {} },
];
