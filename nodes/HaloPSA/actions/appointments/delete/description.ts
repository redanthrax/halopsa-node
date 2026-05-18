import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Appointment ID',
		name: 'appointmentId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['appointments'], operation: ['delete'] } },
		default: 0,
	},
];
