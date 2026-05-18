import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Workday ID', name: 'workdayId', type: 'number', required: true,
		displayOptions: { show: { resource: ['workday'], operation: ['delete'] } }, default: 0 },
];
