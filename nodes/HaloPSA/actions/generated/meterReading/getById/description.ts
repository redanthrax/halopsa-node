import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Meter Reading ID', name: 'meterReadingId', type: 'number', required: true,
		displayOptions: { show: { resource: ['meterReading'], operation: ['getById'] } }, default: 0 },
];
