import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Saved Forecast ID', name: 'savedForecastId', type: 'number', required: true,
		displayOptions: { show: { resource: ['savedForecast'], operation: ['getById'] } }, default: 0 },
];
