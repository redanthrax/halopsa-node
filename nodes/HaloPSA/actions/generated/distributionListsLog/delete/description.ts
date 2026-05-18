import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Distribution Lists Log ID', name: 'distributionListsLogId', type: 'number', required: true,
		displayOptions: { show: { resource: ['distributionListsLog'], operation: ['delete'] } }, default: 0 },
];
