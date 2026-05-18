import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Distribution Lists ID', name: 'distributionListId', type: 'number', required: true,
		displayOptions: { show: { resource: ['distributionLists'], operation: ['getById'] } }, default: 0 },
];
