import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Confluence Details ID', name: 'confluenceDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['confluenceDetails'], operation: ['getById'] } }, default: 0 },
];
