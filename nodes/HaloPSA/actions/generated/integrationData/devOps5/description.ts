import { INodeProperties } from 'n8n-workflow';

export const devOps5Description: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['devOps5'] } }, default: {} },
];
