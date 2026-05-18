import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Mail Campaign Log ID', name: 'mailCampaignLogId', type: 'number', required: true,
		displayOptions: { show: { resource: ['mailCampaignLog'], operation: ['getById'] } }, default: 0 },
];
