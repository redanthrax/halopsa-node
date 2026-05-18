import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Faults Forecasting ID', name: 'faultsForecastingId', type: 'number', required: true,
		displayOptions: { show: { resource: ['faultsForecasting'], operation: ['getById'] } }, default: 0 },
];
