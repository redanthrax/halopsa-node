import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloTimesheet } from '../../Interfaces';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	// Apply filters
	if (filters.agent_id) qs.agent_id = filters.agent_id;
	if (filters.date) qs.date = filters.date;
	
	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index, 50) as number;
		qs.count = limit;
	}

	const requestMethod = 'GET';
	const endpoint = '/Timesheet';
	const body = {} as IDataObject;

	// API returns array directly for Timesheet endpoint
	let responseData: HaloTimesheet[] = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	// Ensure we have an array
	if (!Array.isArray(responseData)) {
		responseData = [responseData];
	}

	// Return the timesheets array
	return this.helpers.returnJsonArray(responseData);
}