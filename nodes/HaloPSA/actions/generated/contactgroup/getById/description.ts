import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Contactgroup ID', name: 'contactgroupId', type: 'number', required: true,
		displayOptions: { show: { resource: ['contactgroup'], operation: ['getById'] } }, default: 0 },
];
