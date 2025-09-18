import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
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
	
	// Build query parameters from filters
	const qs: IDataObject = {};
	
	if (filters) {
		Object.assign(qs, filters);
	}
	
	// Add pagination if not returning all
	if (!returnAll && limit) {
		qs.count = limit;
	}

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	
	if (responseData && typeof responseData === 'object') {
		const clientResponse = responseData as ClientListResponse;
		
		// Return the clients array if it exists, otherwise return the response as-is
		if (clientResponse.clients && Array.isArray(clientResponse.clients)) {
			return clientResponse.clients;
		}
	}
	
	// If it's already an array, return it directly
	if (Array.isArray(responseData)) {
		return responseData;
	}
	
	// Otherwise, wrap in array
	return [responseData as IDataObject];
}