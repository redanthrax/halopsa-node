import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloTimesheet } from '../../Interfaces';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const timesheetId = this.getNodeParameter('timesheetId', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	// Apply additional fields from swagger documentation
	if (additionalFields.agent_id) qs.agent_id = additionalFields.agent_id;
	if (additionalFields.date) qs.date = additionalFields.date;

	const requestMethod = 'GET';
	const endpoint = `/Timesheet/${timesheetId}`;
	const body = {} as IDataObject;

	const responseData: HaloTimesheet = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray([responseData] as IDataObject[]);
}