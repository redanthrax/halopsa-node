import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Consignment ID', name: 'consignmentId', type: 'number', required: true,
		displayOptions: { show: { resource: ['consignment'], operation: ['getById'] } }, default: 0 },
];
