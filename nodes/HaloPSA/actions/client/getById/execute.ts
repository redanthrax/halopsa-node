import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const clientId = this.getNodeParameter('clientId', index) as number;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	if (!clientId) {
		throw new Error('Client ID is required');
	}

	const requestMethod = 'GET';
	const endpoint = `/Client/${clientId}`;
	const body = {};
	
	// Build query parameters from additional fields
	const qs: IDataObject = {};
	
	if (additionalFields) {
		Object.assign(qs, additionalFields);
	}

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	
	// If it's already an array, return it directly
	if (Array.isArray(responseData)) {
		return responseData;
	}
	
	// Otherwise, wrap in array
	return [responseData as IDataObject];
}