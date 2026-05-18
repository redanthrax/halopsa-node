import { INodeProperties } from 'n8n-workflow';

export const deleteParentDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['cSPConsumptionData'], operation: ['deleteParent'] } }, default: {} },
];
