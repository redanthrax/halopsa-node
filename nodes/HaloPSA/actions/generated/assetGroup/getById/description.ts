import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Asset Group ID', name: 'assetGroupId', type: 'number', required: true,
		displayOptions: { show: { resource: ['assetGroup'], operation: ['getById'] } }, default: 0 },
];
