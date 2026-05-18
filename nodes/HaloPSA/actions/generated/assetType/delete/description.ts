import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Asset Type ID', name: 'assetTypeId', type: 'number', required: true,
		displayOptions: { show: { resource: ['assetType'], operation: ['delete'] } }, default: 0 },
];
