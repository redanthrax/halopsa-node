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
	
	const clientData: IDataObject = {
		id: clientId,
		...updateFields,
	};

	const body = [clientData];
	const qs = {};

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	
	if (Array.isArray(responseData)) {
		return responseData;
	}
	
	return [responseData as IDataObject];
}