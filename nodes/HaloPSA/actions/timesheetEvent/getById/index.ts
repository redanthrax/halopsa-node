import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData, INodeProperties } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloTimesheetEvent } from '../../Interfaces';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const timesheetEventId = this.getNodeParameter('timesheetEventId', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	if (additionalFields.includedetails) qs.includedetails = additionalFields.includedetails;

	const requestMethod = 'GET';
	const endpoint = `/TimesheetEvent/${timesheetEventId}`;
	const body = {} as IDataObject;

	const responseData: HaloTimesheetEvent = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray([responseData] as IDataObject[]);
}

export const description: INodeProperties[] = [
	{
		displayName: 'Timesheet Event ID',
		name: 'timesheetEventId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['timesheetEvent'],
				operation: ['getById'],
			},
		},
		default: '',
		required: true,
		description: 'The ID of the timesheet event to retrieve',
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
				operation: ['getById'],
			},
		},
		options: [
			{
				displayName: 'Include Details',
				name: 'includedetails',
				type: 'boolean',
				default: false,
				description: 'Whether to include detailed information',
			},
		],
	},
];