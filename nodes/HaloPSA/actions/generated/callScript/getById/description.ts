import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Call Script ID', name: 'callScriptId', type: 'number', required: true,
		displayOptions: { show: { resource: ['callScript'], operation: ['getById'] } }, default: 0 },
];
