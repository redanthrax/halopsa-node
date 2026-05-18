import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Integration Field Data ID', name: 'integrationFieldDataId', type: 'number', required: true,
		displayOptions: { show: { resource: ['integrationFieldData'], operation: ['delete'] } }, default: 0 },
];
