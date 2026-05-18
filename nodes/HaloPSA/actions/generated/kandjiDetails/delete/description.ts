import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Kandji Details ID', name: 'kandjiDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['kandjiDetails'], operation: ['delete'] } }, default: 0 },
];
