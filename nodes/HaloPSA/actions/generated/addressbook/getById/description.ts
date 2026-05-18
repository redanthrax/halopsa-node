import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Addressbook ID', name: 'addressbookId', type: 'number', required: true,
		displayOptions: { show: { resource: ['addressbook'], operation: ['getById'] } }, default: 0 },
];
