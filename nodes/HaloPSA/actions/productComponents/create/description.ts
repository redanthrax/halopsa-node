import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['productComponents'], operation: ['create'] } }, default: {},
		description: 'ReleaseComponent object or array for POST /ProductComponent' },
];
