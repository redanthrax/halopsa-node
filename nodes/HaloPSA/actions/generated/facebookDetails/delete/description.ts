import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Facebook Details ID', name: 'facebookDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['facebookDetails'], operation: ['delete'] } }, default: 0 },
];
