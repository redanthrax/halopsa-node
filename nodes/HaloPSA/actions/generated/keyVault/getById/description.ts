import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Key Vault ID', name: 'keyVaultId', type: 'number', required: true,
		displayOptions: { show: { resource: ['keyVault'], operation: ['getById'] } }, default: 0 },
];
