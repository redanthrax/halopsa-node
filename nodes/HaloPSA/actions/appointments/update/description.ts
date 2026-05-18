import { INodeProperties } from 'n8n-workflow';

export const updateDescription: INodeProperties[] = [
	{
		displayName: 'Appointment ID',
		name: 'appointmentId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['appointments'], operation: ['update'] } },
		default: 0,
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'json',
		displayOptions: { show: { resource: ['appointments'], operation: ['update'] } },
		default: {},
	},
];
