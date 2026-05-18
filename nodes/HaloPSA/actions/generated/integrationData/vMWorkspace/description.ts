import { INodeProperties } from 'n8n-workflow';

export const vMWorkspaceDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['vMWorkspace'] } }, default: {} },
];
