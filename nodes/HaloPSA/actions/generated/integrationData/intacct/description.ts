import { INodeProperties } from 'n8n-workflow';

export const intacctDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['intacct'] } }, default: {} },
];
