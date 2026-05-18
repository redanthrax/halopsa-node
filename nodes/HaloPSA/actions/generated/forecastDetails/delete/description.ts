import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Forecast Details ID', name: 'forecastDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['forecastDetails'], operation: ['delete'] } }, default: 0 },
];
