import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Release ID', name: 'releaseId', type: 'number', required: true,
		displayOptions: { show: { resource: ['releases'], operation: ['delete'] } }, default: 0 },
];
