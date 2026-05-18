import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Sage Business Cloud Details ID', name: 'sageBusinessCloudDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['sageBusinessCloudDetails'], operation: ['getById'] } }, default: 0 },
];
