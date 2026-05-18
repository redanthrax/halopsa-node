import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Consignment ID', name: 'consignmentId', type: 'number', required: true,
		displayOptions: { show: { resource: ['consignment'], operation: ['delete'] } }, default: 0 },
];
