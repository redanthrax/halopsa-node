import { INodeProperties } from 'n8n-workflow';

export const create_portal_sessionDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['create_portal_session'] } }, default: {} },
];
