import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Power Shell Script Processing ID', name: 'powerShellScriptProcessingId', type: 'number', required: true,
		displayOptions: { show: { resource: ['powerShellScriptProcessing'], operation: ['delete'] } }, default: 0 },
];
