import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Confluence Details ID', name: 'confluenceDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['confluenceDetails'], operation: ['delete'] } }, default: 0 },
];
