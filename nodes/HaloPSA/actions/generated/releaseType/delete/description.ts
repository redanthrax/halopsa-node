import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Release Type ID', name: 'releaseTypeId', type: 'number', required: true,
		displayOptions: { show: { resource: ['releaseType'], operation: ['delete'] } }, default: 0 },
];
