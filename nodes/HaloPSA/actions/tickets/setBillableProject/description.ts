import { INodeProperties } from 'n8n-workflow';

export const setBillableProjectDescription: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'json',
		displayOptions: { show: { resource: ['tickets'], operation: ['setBillableProject'] } },
		default: {},
		description: 'JSON body fields sent to POST /Tickets/SetBillableProject (wrapped in a single-element array)',
	},
];
