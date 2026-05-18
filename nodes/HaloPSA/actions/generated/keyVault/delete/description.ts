import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Key Vault ID', name: 'keyVaultId', type: 'number', required: true,
		displayOptions: { show: { resource: ['keyVault'], operation: ['delete'] } }, default: 0 },
];
