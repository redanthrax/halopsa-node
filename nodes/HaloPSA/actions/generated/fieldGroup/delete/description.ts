import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Field Group ID', name: 'fieldGroupId', type: 'number', required: true,
		displayOptions: { show: { resource: ['fieldGroup'], operation: ['delete'] } }, default: 0 },
];
