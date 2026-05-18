import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Custom Table ID', name: 'customTableId', type: 'number', required: true,
		displayOptions: { show: { resource: ['customTable'], operation: ['delete'] } }, default: 0 },
];
