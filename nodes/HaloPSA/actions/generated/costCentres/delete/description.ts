import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Cost Centres ID', name: 'costCentreId', type: 'number', required: true,
		displayOptions: { show: { resource: ['costCentres'], operation: ['delete'] } }, default: 0 },
];
