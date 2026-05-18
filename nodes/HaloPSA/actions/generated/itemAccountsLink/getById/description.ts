import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Item Accounts Link ID', name: 'itemAccountsLinkId', type: 'number', required: true,
		displayOptions: { show: { resource: ['itemAccountsLink'], operation: ['getById'] } }, default: 0 },
];
