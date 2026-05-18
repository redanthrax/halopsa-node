import { INodeProperties } from 'n8n-workflow';

export const addFieldToAllDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['field'], operation: ['addFieldToAll'] } }, default: {} },
];
