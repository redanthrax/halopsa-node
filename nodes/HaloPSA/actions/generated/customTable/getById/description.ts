import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Custom Table ID', name: 'customTableId', type: 'number', required: true,
		displayOptions: { show: { resource: ['customTable'], operation: ['getById'] } }, default: 0 },
];
