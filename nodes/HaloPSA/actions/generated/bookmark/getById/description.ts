import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Bookmark ID', name: 'bookmarkId', type: 'number', required: true,
		displayOptions: { show: { resource: ['bookmark'], operation: ['getById'] } }, default: 0 },
];
