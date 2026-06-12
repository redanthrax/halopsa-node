import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { applyFiltersToQueryString, resolveFilters } from '../../../filterParameters';
import { apiRequest, apiRequestAllItems } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const filters = resolveFilters.call(this, index);

	const qs = applyFiltersToQueryString(filters);

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index, 50) as number;
		qs.count = limit;
	}

	const requestMethod = 'GET';
	const endpoint = '/Tickets';
	const body = {} as IDataObject;

	if (returnAll) {
		const all = await apiRequestAllItems.call(this, requestMethod, endpoint, 'tickets', body, qs);
		return this.helpers.returnJsonArray(all);
	}

	let responseData: any;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData.tickets || responseData || []);
}
