import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Dashboard Links Repository ID', name: 'dashboardLinksRepositoryId', type: 'number', required: true,
		displayOptions: { show: { resource: ['dashboardLinksRepository'], operation: ['getById'] } }, default: 0 },
];
