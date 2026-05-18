import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Currency ID', name: 'currencyId', type: 'number', required: true,
		displayOptions: { show: { resource: ['currency'], operation: ['getById'] } }, default: 0 },
];
