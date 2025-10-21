import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject } from 'n8n-workflow';
import { apiRequest, apiRequestAllItems } from '../../../transport';
import { ClientListResponse } from '../../interfaces/client';

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const returnAll = this.getNodeParameter('returnAll', index, false) as boolean;
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;
	
	let limit = 50;
	if (!returnAll) {
		limit = this.getNodeParameter('limit', index, 50) as number;
	}

	const requestMethod = 'GET';
	const endpoint = '/Client';
	const body = {};
	
	const qs: IDataObject = {};
	
	if (filters) {
		Object.assign(qs, filters);
		
		if (filters.include_custom_fields && Array.isArray(filters.include_custom_fields)) {
			qs.include_custom_fields = filters.include_custom_fields.join(',');
		}
	}
	
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