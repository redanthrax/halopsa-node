import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData, INodeProperties } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloTimesheetEvent } from '../../Interfaces';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const timesheetEventId = this.getNodeParameter('timesheetEventId', index) as string;
	const body = {
		id: parseInt(timesheetEventId, 10),
	} as IDataObject;

	// Get update fields
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;
	Object.assign(body, updateFields);

	const requestMethod = 'POST';
	const endpoint = '/TimesheetEvent';

	// API expects array of timesheet events
	const requestBody = [body];

	const responseData: HaloTimesheetEvent[] = await apiRequest.call(this, requestMethod, endpoint, requestBody, {});

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}

export const description: INodeProperties[] = [
	{
		displayName: 'Timesheet Event ID',
		name: 'timesheetEventId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['timesheetEvent'],
				operation: ['update'],
			},
		},
		default: '',
		required: true,
		description: 'The ID of the timesheet event to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['timesheetEvent'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Agent ID',
				name: 'agent_id',
				type: 'number',
				default: 0,
				description: 'The agent ID for the timesheet event',
			},
			{
				displayName: 'End Date',
				name: 'end_date',
				type: 'dateTime',
				default: '',
				description: 'End date of the event',
			},
			{
				displayName: 'Event Type',
				name: 'event_type',
				type: 'number',
				default: 0,
				description: 'Type of the event',
			},
			{
				displayName: 'Note',
				name: 'note',
				type: 'string',
				default: '',
				description: 'Note for the event',
			},
			{
				displayName: 'Start Date',
				name: 'start_date',
				type: 'dateTime',
				default: '',
				description: 'Start date of the event',
			},
			{
				displayName: 'Subject',
				name: 'subject',
				type: 'string',
				default: '',
				description: 'Subject of the timesheet event',
			},
			{
				displayName: 'Ticket ID',
				name: 'ticket_id',
				type: 'number',
				default: 0,
				description: 'Associated ticket ID',
			},
			{
				displayName: 'Time Taken',
				name: 'timetaken',
				type: 'number',
				default: 0,
				description: 'Time taken for the event',
			},
		],
	},
];