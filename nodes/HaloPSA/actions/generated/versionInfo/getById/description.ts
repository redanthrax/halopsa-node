import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Version Info ID', name: 'versionInfoId', type: 'number', required: true,
		displayOptions: { show: { resource: ['versionInfo'], operation: ['getById'] } }, default: 0 },
];
