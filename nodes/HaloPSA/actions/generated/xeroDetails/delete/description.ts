import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Xero Details ID', name: 'xeroDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['xeroDetails'], operation: ['delete'] } }, default: 0 },
];
