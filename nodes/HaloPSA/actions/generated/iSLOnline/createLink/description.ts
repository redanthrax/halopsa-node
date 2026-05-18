import { INodeProperties } from 'n8n-workflow';

export const createLinkDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['iSLOnline'], operation: ['createLink'] } }, default: {} },
];
