import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['suppliers'], operation: ['create'] } }, default: {},
		description: 'Company object or array for POST /Supplier' },
];
