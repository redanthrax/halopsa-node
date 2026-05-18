import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Mail Campaign ID', name: 'mailCampaignId', type: 'number', required: true,
		displayOptions: { show: { resource: ['mailCampaign'], operation: ['delete'] } }, default: 0 },
];
