import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Asset Type ID', name: 'assetTypeId', type: 'number', required: true,
		displayOptions: { show: { resource: ['assetType'], operation: ['getById'] } }, default: 0 },
];
