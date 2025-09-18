import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const timesheetId = this.getNodeParameter('timesheetId', index) as string;

	const requestMethod = 'DELETE';
	const endpoint = `/Timesheet/${timesheetId}`;
	const body = {} as IDataObject;

	await apiRequest.call(this, requestMethod, endpoint, body, {});

	return this.helpers.returnJsonArray([{ success: true, id: timesheetId }] as IDataObject[]);
}