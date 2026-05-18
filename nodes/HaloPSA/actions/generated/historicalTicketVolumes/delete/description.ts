import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Historical Ticket Volumes ID', name: 'historicalTicketVolumeId', type: 'number', required: true,
		displayOptions: { show: { resource: ['historicalTicketVolumes'], operation: ['delete'] } }, default: 0 },
];
