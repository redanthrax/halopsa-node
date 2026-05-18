import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Item Accounts Link ID', name: 'itemAccountsLinkId', type: 'number', required: true,
		displayOptions: { show: { resource: ['itemAccountsLink'], operation: ['delete'] } }, default: 0 },
];
