import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Item Group ID', name: 'itemGroupId', type: 'number', required: true,
		displayOptions: { show: { resource: ['itemGroup'], operation: ['delete'] } }, default: 0 },
];
