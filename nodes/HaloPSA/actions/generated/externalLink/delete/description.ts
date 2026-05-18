import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'External Link ID', name: 'externalLinkId', type: 'number', required: true,
		displayOptions: { show: { resource: ['externalLink'], operation: ['delete'] } }, default: 0 },
];
