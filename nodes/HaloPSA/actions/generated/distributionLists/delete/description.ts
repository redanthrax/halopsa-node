import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Distribution Lists ID', name: 'distributionListId', type: 'number', required: true,
		displayOptions: { show: { resource: ['distributionLists'], operation: ['delete'] } }, default: 0 },
];
