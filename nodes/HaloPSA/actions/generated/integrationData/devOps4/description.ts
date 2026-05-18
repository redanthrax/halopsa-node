import { INodeProperties } from 'n8n-workflow';

export const devOps4Description: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['devOps4'] } }, default: {} },
];
