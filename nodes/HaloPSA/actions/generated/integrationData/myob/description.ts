import { INodeProperties } from 'n8n-workflow';

export const myobDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['myob'] } }, default: {} },
];
