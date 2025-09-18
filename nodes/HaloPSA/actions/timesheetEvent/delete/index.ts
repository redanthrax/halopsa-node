import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData, INodeProperties } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const timesheetEventId = this.getNodeParameter('timesheetEventId', index) as string;

	const requestMethod = 'DELETE';
	const endpoint = `/TimesheetEvent/${timesheetEventId}`;
	const body = {} as IDataObject;

	await apiRequest.call(this, requestMethod, endpoint, body, {});

	return this.helpers.returnJsonArray([{ success: true, id: timesheetEventId }] as IDataObject[]);
}

export const description: INodeProperties[] = [
	{
		displayName: 'Timesheet Event ID',
		name: 'timesheetEventId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['timesheetEvent'],
				operation: ['delete'],
			},
		},
		default: '',
		required: true,
		description: 'The ID of the timesheet event to delete',
	},
];