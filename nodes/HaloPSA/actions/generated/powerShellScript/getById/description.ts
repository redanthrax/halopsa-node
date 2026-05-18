import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Power Shell Script ID', name: 'powerShellScriptId', type: 'number', required: true,
		displayOptions: { show: { resource: ['powerShellScript'], operation: ['getById'] } }, default: 0 },
];
