import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Agent Name or ID',
		name: 'agent_id',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['timesheet'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'The agent for the timesheet. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'getAgents',
		},
		options: [],
	},
	{
		displayName: 'Date',
		name: 'date',
		type: 'dateTime',
		displayOptions: {
			show: {
				resource: ['timesheet'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'The date for the timesheet',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['timesheet'],
				operation: ['create'],
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
				displayName: 'Timesheet Manager Name or ID',
				name: 'timesheet_manager',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getAgents',
				},
				default: '',
				description: 'Timesheet manager agent. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
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