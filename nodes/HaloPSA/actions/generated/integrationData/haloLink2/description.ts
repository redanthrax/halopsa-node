import { INodeProperties } from 'n8n-workflow';

export const haloLink2Description: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['haloLink2'] } }, default: {} },
];
