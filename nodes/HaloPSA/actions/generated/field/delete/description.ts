import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Field ID', name: 'fieldId', type: 'number', required: true,
		displayOptions: { show: { resource: ['field'], operation: ['delete'] } }, default: 0 },
];
