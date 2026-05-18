import { INodeProperties } from 'n8n-workflow';

export const getImageByTokenDescription: INodeProperties[] = [
	{ displayName: 'Token', name: 'token', type: 'string',
		displayOptions: { show: { resource: ['attachments'], operation: ['getImageByToken'] } }, default: '' },
	{ displayName: 'Nonce', name: 'nonce', type: 'string',
		displayOptions: { show: { resource: ['attachments'], operation: ['getImageByToken'] } }, default: '' },
];
