import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['dashboardLinks'], operation: ['create'] } }, default: {},
		description: 'Object or array for POST /DashboardLinks' },
];
