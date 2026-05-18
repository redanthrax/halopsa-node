import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Power Shell Script ID', name: 'powerShellScriptId', type: 'number', required: true,
		displayOptions: { show: { resource: ['powerShellScript'], operation: ['delete'] } }, default: 0 },
];
