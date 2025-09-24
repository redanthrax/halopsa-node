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
	
	const clientData: IDataObject = {
		name,
		...additionalFields,
	};

	const body = [clientData];
	const qs = {};

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	
	if (Array.isArray(responseData)) {
		return responseData;
	}
	
	return [responseData as IDataObject];
}