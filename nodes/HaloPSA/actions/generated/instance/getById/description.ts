import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Instance ID', name: 'instanceId', type: 'number', required: true,
		displayOptions: { show: { resource: ['instance'], operation: ['getById'] } }, default: 0 },
];
