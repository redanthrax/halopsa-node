import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloTimesheetEvent } from '../../Interfaces';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	// Apply filters from swagger documentation
	if (filters.agent_id) qs.agent_id = filters.agent_id;
	if (filters.agents) qs.agents = filters.agents;
	if (filters.end_date) qs.end_date = filters.end_date;
	if (filters.start_date) qs.start_date = filters.start_date;
	if (filters.utcoffset) qs.utcoffset = filters.utcoffset;
	
	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index, 50) as number;
		qs.count = limit;
	}

	const requestMethod = 'GET';
	const endpoint = '/TimesheetEvent';
	const body = {} as IDataObject;

	// API returns array directly for TimesheetEvent endpoint
	let responseData: HaloTimesheetEvent[] = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	// Ensure we have an array
	if (!Array.isArray(responseData)) {
		responseData = [responseData];
	}

	// Return the timesheet events array
	return this.helpers.returnJsonArray(responseData);
}