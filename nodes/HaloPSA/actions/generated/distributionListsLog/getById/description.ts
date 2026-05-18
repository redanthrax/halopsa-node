import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Distribution Lists Log ID', name: 'distributionListsLogId', type: 'number', required: true,
		displayOptions: { show: { resource: ['distributionListsLog'], operation: ['getById'] } }, default: 0 },
];
