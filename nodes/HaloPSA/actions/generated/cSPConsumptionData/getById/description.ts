import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'CSPConsumption Data ID', name: 'cSPConsumptionDataId', type: 'number', required: true,
		displayOptions: { show: { resource: ['cSPConsumptionData'], operation: ['getById'] } }, default: 0 },
];
