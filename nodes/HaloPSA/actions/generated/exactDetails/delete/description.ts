import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Exact Details ID', name: 'exactDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['exactDetails'], operation: ['delete'] } }, default: 0 },
];
