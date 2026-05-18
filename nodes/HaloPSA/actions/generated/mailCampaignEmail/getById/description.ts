import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Mail Campaign Email ID', name: 'mailCampaignEmailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['mailCampaignEmail'], operation: ['getById'] } }, default: 0 },
];
