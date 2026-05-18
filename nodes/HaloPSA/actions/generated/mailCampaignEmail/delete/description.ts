import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Mail Campaign Email ID', name: 'mailCampaignEmailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['mailCampaignEmail'], operation: ['delete'] } }, default: 0 },
];
