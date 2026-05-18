import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'incomingemail ID', name: 'incomingemailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['incomingemail'], operation: ['delete'] } }, default: 0 },
];
