import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Component ID', name: 'componentId', type: 'number', required: true,
		displayOptions: { show: { resource: ['productComponents'], operation: ['delete'] } }, default: 0 },
];
