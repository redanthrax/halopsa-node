import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Mail Campaign ID', name: 'mailCampaignId', type: 'number', required: true,
		displayOptions: { show: { resource: ['mailCampaign'], operation: ['getById'] } }, default: 0 },
];
