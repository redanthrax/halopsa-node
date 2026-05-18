import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Call Script ID', name: 'callScriptId', type: 'number', required: true,
		displayOptions: { show: { resource: ['callScript'], operation: ['delete'] } }, default: 0 },
];
