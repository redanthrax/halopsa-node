import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloTimesheet } from '../../Interfaces';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const timesheetId = this.getNodeParameter('timesheetId', index) as string;
	const body = {
		id: parseInt(timesheetId, 10),
	} as IDataObject;

	// Get update fields
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;
	Object.assign(body, updateFields);

	const requestMethod = 'POST';
	const endpoint = '/Timesheet';

	// API expects array of timesheets
	const requestBody = [body];

	const responseData: HaloTimesheet[] = await apiRequest.call(this, requestMethod, endpoint, requestBody, {});

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}