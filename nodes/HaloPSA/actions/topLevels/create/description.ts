import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['topLevels'], operation: ['create'] } }, default: {},
		description: 'Tree object or array for POST /TopLevel' },
];
