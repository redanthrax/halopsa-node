import { INodeProperties } from 'n8n-workflow';

export const businessCentralDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['businessCentral'] } }, default: {} },
];
