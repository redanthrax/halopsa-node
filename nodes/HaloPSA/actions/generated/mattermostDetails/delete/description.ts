import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Mattermost Details ID', name: 'mattermostDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['mattermostDetails'], operation: ['delete'] } }, default: 0 },
];
