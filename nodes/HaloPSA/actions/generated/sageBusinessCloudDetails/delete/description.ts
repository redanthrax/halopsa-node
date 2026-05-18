import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Sage Business Cloud Details ID', name: 'sageBusinessCloudDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['sageBusinessCloudDetails'], operation: ['delete'] } }, default: 0 },
];
