import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Kashflow Details ID', name: 'kashflowDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['kashflowDetails'], operation: ['delete'] } }, default: 0 },
];
