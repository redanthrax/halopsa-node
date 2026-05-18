import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Ticket Area ID', name: 'ticketAreaId', type: 'number', required: true,
		displayOptions: { show: { resource: ['ticketArea'], operation: ['delete'] } }, default: 0 },
];
