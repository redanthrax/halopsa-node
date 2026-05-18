import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Ticket Type Group ID', name: 'ticketTypeGroupId', type: 'number', required: true,
		displayOptions: { show: { resource: ['ticketTypeGroup'], operation: ['getById'] } }, default: 0 },
];
