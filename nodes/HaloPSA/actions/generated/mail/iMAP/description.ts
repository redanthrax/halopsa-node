import { INodeProperties } from 'n8n-workflow';

export const iMAPDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['mail'], operation: ['iMAP'] } }, default: {} },
];
