import { INodeProperties } from 'n8n-workflow';

export const contractUtilisationDescription: INodeProperties[] = [
	{
		displayName: 'Start Date (UTC)',
		name: 'startDate',
		type: 'dateTime',
		default: '',
		displayOptions: {
			show: {
				resource: ['reporting'],
				operation: ['contractUtilisation'],
			},
		},
		description:
			'Inclusive start of the billing period (UTC). Leave empty for the first day of the current UTC month.',
	},
	{
		displayName: 'End Date (UTC)',
		name: 'endDate',
		type: 'dateTime',
		default: '',
		displayOptions: {
			show: {
				resource: ['reporting'],
				operation: ['contractUtilisation'],
			},
		},
		description:
			'Exclusive end of the billing period (UTC). Leave empty for the first day of the next UTC month.',
	},
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				resource: ['reporting'],
				operation: ['contractUtilisation'],
			},
		},
		description: 'Filter to one client (0 = all clients with activity in the period)',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		displayOptions: {
			show: {
				resource: ['reporting'],
				operation: ['contractUtilisation'],
			},
		},
		description: 'Max number of results to return',
	},
];
