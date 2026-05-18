import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Dashboard Links ID', name: 'dashboardLinkId', type: 'number', required: true,
		displayOptions: { show: { resource: ['dashboardLinks'], operation: ['delete'] } }, default: 0 },
];
