import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const name = this.getNodeParameter('name', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	if (!name) {
		throw new Error('Client name is required');
	}

	const requestMethod = 'POST';
	const endpoint = '/Client';
	
	// Build the client data object
	const clientData: IDataObject = {
		name,
		...additionalFields,
	};

	// Wrap in array as the API expects an array of clients
	const body = [clientData];
	const qs = {};

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	
	// If it's already an array, return it directly
	if (Array.isArray(responseData)) {
		return responseData;
	}
	
	// Otherwise, wrap in array
	return [responseData as IDataObject];
}