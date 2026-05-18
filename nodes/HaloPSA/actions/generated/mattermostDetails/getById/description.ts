import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Mattermost Details ID', name: 'mattermostDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['mattermostDetails'], operation: ['getById'] } }, default: 0 },
];
