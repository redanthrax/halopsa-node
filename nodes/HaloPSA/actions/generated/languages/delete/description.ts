import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Languages ID', name: 'languageId', type: 'number', required: true,
		displayOptions: { show: { resource: ['languages'], operation: ['delete'] } }, default: 0 },
];
