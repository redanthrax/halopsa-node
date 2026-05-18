import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'View List Group ID', name: 'viewListGroupId', type: 'number', required: true,
		displayOptions: { show: { resource: ['viewListGroup'], operation: ['delete'] } }, default: 0 },
];
