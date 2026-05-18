import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Tax ID', name: 'taxId', type: 'number', required: true,
		displayOptions: { show: { resource: ['tax'], operation: ['delete'] } }, default: 0 },
];
