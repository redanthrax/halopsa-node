import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Sail Point Details ID', name: 'sailPointDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['sailPointDetails'], operation: ['delete'] } }, default: 0 },
];
