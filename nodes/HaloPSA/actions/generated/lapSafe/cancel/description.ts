import { INodeProperties } from 'n8n-workflow';

export const cancelDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['lapSafe'], operation: ['cancel'] } }, default: {} },
];
