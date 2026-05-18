import { INodeProperties } from 'n8n-workflow';

export const synnexDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['synnex'] } }, default: {} },
];
