import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Ticket Type Group ID', name: 'ticketTypeGroupId', type: 'number', required: true,
		displayOptions: { show: { resource: ['ticketTypeGroup'], operation: ['delete'] } }, default: 0 },
];
