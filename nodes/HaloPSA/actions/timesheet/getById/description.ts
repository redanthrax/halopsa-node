import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Timesheet ID',
		name: 'timesheetId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['timesheet'],
				operation: ['getById'],
			},
		},
		default: '',
		required: true,
		description: 'The ID of the timesheet to retrieve',
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
				operation: ['getById'],
			},
		},
		options: [
			{
				displayName: 'Agent ID',
				name: 'agent_id',
				type: 'number',
				default: 0,
				description: 'Filter by the specified agent',
			},
			{
				displayName: 'Date',
				name: 'date',
				type: 'string',
				default: '',
				description: 'Filter by specific date',
			},
		],
	},
];