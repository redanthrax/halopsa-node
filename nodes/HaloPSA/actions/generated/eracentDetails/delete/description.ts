import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Eracent Details ID', name: 'eracentDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['eracentDetails'], operation: ['delete'] } }, default: 0 },
];
