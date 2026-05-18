import { INodeProperties } from 'n8n-workflow';

export const nextRefDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['contracts'], operation: ['nextRef'] } }, default: {},
		description: 'ContractHeader object or array for POST /ClientContract/NextRef' },
];
