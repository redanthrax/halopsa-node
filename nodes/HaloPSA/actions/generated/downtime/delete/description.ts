import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Downtime ID', name: 'downtimeId', type: 'number', required: true,
		displayOptions: { show: { resource: ['downtime'], operation: ['delete'] } }, default: 0 },
];
