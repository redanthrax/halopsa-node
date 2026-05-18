import { INodeProperties } from 'n8n-workflow';

export const reportCategoriesDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['reportRepository'], operation: ['reportCategories'] } }, default: {} },
];
