import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'incomingemail ID', name: 'incomingemailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['incomingemail'], operation: ['getById'] } }, default: 0 },
];
