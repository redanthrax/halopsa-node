import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData, INodeProperties } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloTimesheetEvent } from '../../Interfaces';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	
	// Get main properties
	if (this.getNodeParameter('agent_id', index, 0)) body.agent_id = this.getNodeParameter('agent_id', index);
	if (this.getNodeParameter('subject', index, '')) body.subject = this.getNodeParameter('subject', index);
	
	// Get additional fields
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;
	Object.assign(body, additionalFields);

	const requestMethod = 'POST';
	const endpoint = '/TimesheetEvent';
	
	// API expects array of timesheet events
	const requestBody = [body];

	const responseData: HaloTimesheetEvent[] = await apiRequest.call(this, requestMethod, endpoint, requestBody, {});

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}

export const description: INodeProperties[] = [
	{
		displayName: 'Agent ID',
		name: 'agent_id',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['timesheetEvent'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'The agent ID for the timesheet event',
	},
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['timesheetEvent'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Subject of the timesheet event',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['timesheetEvent'],
				operation: ['create'],
			},
		},
		options: [
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