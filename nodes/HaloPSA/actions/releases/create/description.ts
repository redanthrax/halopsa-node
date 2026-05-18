import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['releases'], operation: ['create'] } }, default: {},
		description: 'Release object or array for POST /Release' },
];
