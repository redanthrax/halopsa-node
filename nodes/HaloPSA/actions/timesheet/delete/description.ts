import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Timesheet ID',
		name: 'timesheetId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['timesheet'],
				operation: ['delete'],
			},
		},
		default: '',
		required: true,
		description: 'The ID of the timesheet to delete',
	},
];