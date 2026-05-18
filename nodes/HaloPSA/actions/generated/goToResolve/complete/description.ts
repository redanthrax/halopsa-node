import { INodeProperties } from 'n8n-workflow';

export const completeDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['goToResolve'], operation: ['complete'] } }, default: {} },
];
