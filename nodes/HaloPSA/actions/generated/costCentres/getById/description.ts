import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Cost Centres ID', name: 'costCentreId', type: 'number', required: true,
		displayOptions: { show: { resource: ['costCentres'], operation: ['getById'] } }, default: 0 },
];
