import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Service Category ID', name: 'serviceCategoryId', type: 'number', required: true,
		displayOptions: { show: { resource: ['serviceCategory'], operation: ['delete'] } }, default: 0 },
];
