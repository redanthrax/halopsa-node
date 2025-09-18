import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const clientId = this.getNodeParameter('clientId', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;

	if (!clientId) {
		throw new Error('Client ID is required');
	}

	if (!updateFields || Object.keys(updateFields).length === 0) {
		throw new Error('At least one field to update is required');
	}

	const requestMethod = 'POST';
	const endpoint = '/Client';
	
	// Build the client data object with ID for update
	const clientData: IDataObject = {
		id: clientId,
		...updateFields,
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