import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'External Link ID', name: 'externalLinkId', type: 'number', required: true,
		displayOptions: { show: { resource: ['externalLink'], operation: ['getById'] } }, default: 0 },
];
