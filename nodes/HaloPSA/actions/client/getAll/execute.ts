import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject } from 'n8n-workflow';
import { applyFiltersToQueryString, resolveFilters } from '../../../filterParameters';
import { apiRequest, apiRequestAllItems } from '../../../transport';
import { ClientListResponse } from '../../interfaces/client';

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const returnAll = this.getNodeParameter('returnAll', index, false) as boolean;
	const filters = resolveFilters.call(this, index);
	
	let limit = 50;
	if (!returnAll) {
		limit = this.getNodeParameter('limit', index, 50) as number;
	}

	const requestMethod = 'GET';
	const endpoint = '/Client';
	const body = {};
	
	const qs = applyFiltersToQueryString(filters);
	
	if (!returnAll && limit) {
		qs.count = limit;
	}

if (returnAll) {
		const all = await apiRequestAllItems.call(this, requestMethod, endpoint, 'clients', body, qs);
		return all;
	}

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	
	if (responseData && typeof responseData === 'object') {
		const clientResponse = responseData as ClientListResponse;
		
		if (clientResponse.clients && Array.isArray(clientResponse.clients)) {
			return clientResponse.clients;
		}
	}
	
	if (Array.isArray(responseData)) {
		return responseData;
	}
	
	return [responseData as IDataObject];
}