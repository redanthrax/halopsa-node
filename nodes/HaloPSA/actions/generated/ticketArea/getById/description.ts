import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Ticket Area ID', name: 'ticketAreaId', type: 'number', required: true,
		displayOptions: { show: { resource: ['ticketArea'], operation: ['getById'] } }, default: 0 },
];
