import { INodeProperties } from 'n8n-workflow';

export const nextRefDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['supplierContract'], operation: ['nextRef'] } }, default: {} },
];
