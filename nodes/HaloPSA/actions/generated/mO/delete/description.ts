import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'MO ID', name: 'mOId', type: 'number', required: true,
		displayOptions: { show: { resource: ['mO'], operation: ['delete'] } }, default: 0 },
];
