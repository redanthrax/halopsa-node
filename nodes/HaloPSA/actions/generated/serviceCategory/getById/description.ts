import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Service Category ID', name: 'serviceCategoryId', type: 'number', required: true,
		displayOptions: { show: { resource: ['serviceCategory'], operation: ['getById'] } }, default: 0 },
];
