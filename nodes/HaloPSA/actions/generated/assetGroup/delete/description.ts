import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Asset Group ID', name: 'assetGroupId', type: 'number', required: true,
		displayOptions: { show: { resource: ['assetGroup'], operation: ['delete'] } }, default: 0 },
];
