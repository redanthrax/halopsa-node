import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const clientId = this.getNodeParameter('clientId', index) as number;

	if (!clientId) {
		throw new Error('Client ID is required');
	}

	const requestMethod = 'DELETE';
	const endpoint = `/Client/${clientId}`;
	const body = {};
	const qs = {};

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	
	// Return success message or response data
	const result = {
		success: true,
		message: `Client with ID ${clientId} deleted successfully`,
		...responseData,
	};
	
	return [result];
}