import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Addressbook ID', name: 'addressbookId', type: 'number', required: true,
		displayOptions: { show: { resource: ['addressbook'], operation: ['delete'] } }, default: 0 },
];
