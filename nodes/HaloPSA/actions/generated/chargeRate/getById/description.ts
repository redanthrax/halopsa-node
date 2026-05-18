import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Charge Rate ID', name: 'chargeRateId', type: 'number', required: true,
		displayOptions: { show: { resource: ['chargeRate'], operation: ['getById'] } }, default: 0 },
];
