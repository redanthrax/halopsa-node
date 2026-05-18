import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Currency ID', name: 'currencyId', type: 'number', required: true,
		displayOptions: { show: { resource: ['currency'], operation: ['delete'] } }, default: 0 },
];
