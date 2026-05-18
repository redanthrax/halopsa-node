import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Service Request Details ID', name: 'serviceRequestDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['serviceRequestDetails'], operation: ['getById'] } }, default: 0 },
];
