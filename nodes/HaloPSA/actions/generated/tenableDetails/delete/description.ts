import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Tenable Details ID', name: 'tenableDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['tenableDetails'], operation: ['delete'] } }, default: 0 },
];
