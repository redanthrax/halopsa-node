import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Agent Check In ID', name: 'agentCheckInId', type: 'number', required: true,
		displayOptions: { show: { resource: ['agentCheckIn'], operation: ['getById'] } }, default: 0 },
];
