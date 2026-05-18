import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Appointment ID',
		name: 'appointmentId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['appointments'], operation: ['getById'] } },
		default: 0,
	},
];
