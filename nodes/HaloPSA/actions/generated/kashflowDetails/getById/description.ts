import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Kashflow Details ID', name: 'kashflowDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['kashflowDetails'], operation: ['getById'] } }, default: 0 },
];
