import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Dashboard Links ID', name: 'dashboardLinkId', type: 'number', required: true,
		displayOptions: { show: { resource: ['dashboardLinks'], operation: ['getById'] } }, default: 0 },
];
