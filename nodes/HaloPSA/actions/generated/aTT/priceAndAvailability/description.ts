import { INodeProperties } from 'n8n-workflow';

export const priceAndAvailabilityDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['aTT'], operation: ['priceAndAvailability'] } }, default: {} },
];
