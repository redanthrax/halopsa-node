import { INodeProperties } from 'n8n-workflow';

export const migrateDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['itemAccountsLink'], operation: ['migrate'] } }, default: {} },
];
