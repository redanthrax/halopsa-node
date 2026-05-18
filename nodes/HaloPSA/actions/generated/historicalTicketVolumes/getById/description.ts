import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Historical Ticket Volumes ID', name: 'historicalTicketVolumeId', type: 'number', required: true,
		displayOptions: { show: { resource: ['historicalTicketVolumes'], operation: ['getById'] } }, default: 0 },
];
