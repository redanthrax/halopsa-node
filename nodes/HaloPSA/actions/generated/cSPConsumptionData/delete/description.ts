import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'CSPConsumption Data ID', name: 'cSPConsumptionDataId', type: 'number', required: true,
		displayOptions: { show: { resource: ['cSPConsumptionData'], operation: ['delete'] } }, default: 0 },
];
