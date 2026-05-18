import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Service Availability ID', name: 'serviceAvailabilityId', type: 'number', required: true,
		displayOptions: { show: { resource: ['serviceAvailability'], operation: ['getById'] } }, default: 0 },
];
