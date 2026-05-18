import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Saved Forecast ID', name: 'savedForecastId', type: 'number', required: true,
		displayOptions: { show: { resource: ['savedForecast'], operation: ['delete'] } }, default: 0 },
];
