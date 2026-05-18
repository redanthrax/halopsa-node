import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Service ID', name: 'serviceId', type: 'number', required: true,
		displayOptions: { show: { resource: ['service'], operation: ['delete'] } }, default: 0 },
];
