import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloTimesheet } from '../../Interfaces';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	
	// Get main properties
	if (this.getNodeParameter('agent_id', index, 0)) body.agent_id = this.getNodeParameter('agent_id', index);
	if (this.getNodeParameter('date', index, '')) body.date = this.getNodeParameter('date', index);
	
	// Get additional fields
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;
	Object.assign(body, additionalFields);

	const requestMethod = 'POST';
	const endpoint = '/Timesheet';
	
	// API expects array of timesheets
	const requestBody = [body];

	const responseData: HaloTimesheet[] = await apiRequest.call(this, requestMethod, endpoint, requestBody, {});

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}