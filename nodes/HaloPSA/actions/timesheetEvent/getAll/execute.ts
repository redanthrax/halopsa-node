import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { resolveFilters } from '../../../filterParameters';
import { apiRequest } from '../../../transport';
import { HaloTimesheetEvent } from '../../Interfaces';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const filters = resolveFilters.call(this, index);
	
	const qs = {} as IDataObject;
	
	if (filters) {
		Object.assign(qs, filters);
	}
	
	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index, 50) as number;
		qs.count = limit;
	}

	const requestMethod = 'GET';
	const endpoint = '/TimesheetEvent';
	const body = {} as IDataObject;

	let responseData: HaloTimesheetEvent[] = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	if (!Array.isArray(responseData)) {
		responseData = [responseData];
	}

	return this.helpers.returnJsonArray(responseData);
}