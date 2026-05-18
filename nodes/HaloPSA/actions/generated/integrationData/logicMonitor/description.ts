import { INodeProperties } from 'n8n-workflow';

export const logicMonitorDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['logicMonitor'] } }, default: {} },
];
