import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Service Availability ID', name: 'serviceAvailabilityId', type: 'number', required: true,
		displayOptions: { show: { resource: ['serviceAvailability'], operation: ['delete'] } }, default: 0 },
];
