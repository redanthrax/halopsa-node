import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Asset Type Mappings ID', name: 'assetTypeMappingId', type: 'number', required: true,
		displayOptions: { show: { resource: ['assetTypeMappings'], operation: ['getById'] } }, default: 0 },
];
