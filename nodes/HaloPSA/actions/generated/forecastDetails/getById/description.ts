import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Forecast Details ID', name: 'forecastDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['forecastDetails'], operation: ['getById'] } }, default: 0 },
];
