import { INodeProperties } from 'n8n-workflow';

export const customTranslateDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['azureTranslate'], operation: ['customTranslate'] } }, default: {} },
];
