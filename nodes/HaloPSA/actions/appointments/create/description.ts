import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'json',
		displayOptions: { show: { resource: ['appointments'], operation: ['create'] } },
		default: {},
		description: 'Appointment fields as JSON (subject, start_date, end_date, agents, ticket_id, etc.)',
	},
];
