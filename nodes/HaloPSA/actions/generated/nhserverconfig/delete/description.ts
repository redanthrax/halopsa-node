import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Nhserverconfig ID', name: 'nhserverconfigId', type: 'number', required: true,
		displayOptions: { show: { resource: ['nhserverconfig'], operation: ['delete'] } }, default: 0 },
];
