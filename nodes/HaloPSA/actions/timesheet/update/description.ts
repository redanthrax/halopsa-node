import { INodeProperties } from 'n8n-workflow';

export const updateDescription: INodeProperties[] = [
	{
		displayName: 'Timesheet ID',
		name: 'timesheetId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['timesheet'],
				operation: ['update'],
			},
		},
		default: '',
		required: true,
		description: 'The ID of the timesheet to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['timesheet'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Actual Hours',
				name: 'actual_hours',
				type: 'number',
				default: 0,
				description: 'Actual hours worked',
			},
			{
				displayName: 'Agent ID',
				name: 'agent_id',
				type: 'number',
				default: 0,
				description: 'The agent ID for the timesheet',
			},
			{
				displayName: 'Agent Name',
				name: 'agent_name',
				type: 'string',
				default: '',
				description: 'The name of the agent',
			},
			{
				displayName: 'Break Hours',
				name: 'break_hours',
				type: 'number',
				default: 0,
				description: 'Break hours taken',
			},
			{
				displayName: 'Colour',
				name: 'colour',
				type: 'color',
				default: '',
				description: 'Color code for the timesheet',
			},
			{
				displayName: 'Date',
				name: 'date',
				type: 'dateTime',
				default: '',
				description: 'The date for the timesheet',
			},
			{
				displayName: 'End Time',
				name: 'end_time',
				type: 'dateTime',
				default: '',
				description: 'End time for the timesheet',
			},
			{
				displayName: 'Start Time',
				name: 'start_time',
				type: 'dateTime',
				default: '',
				description: 'Start time for the timesheet',
			},
			{
				displayName: 'Target Hours',
				name: 'target_hours',
				type: 'number',
				default: 0,
				description: 'Target hours for the timesheet',
			},
			{
				displayName: 'Timesheet Manager',
				name: 'timesheet_manager',
				type: 'number',
				default: 0,
				description: 'ID of the timesheet manager',
			},
			{
				displayName: 'Work Hours',
				name: 'work_hours',
				type: 'number',
				default: 0,
				description: 'Total work hours',
			},
			{
				displayName: 'Workday ID',
				name: 'workdayid',
				type: 'number',
				default: 0,
				description: 'Associated workday ID',
			},
		],
	},
];