import { INodeProperties } from 'n8n-workflow';

export const cancelDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['tenable'], operation: ['cancel'] } }, default: {} },
];
