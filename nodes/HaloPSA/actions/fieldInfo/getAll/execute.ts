import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const returnAll = this.getNodeParameter('returnAll', index, false) as boolean;
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;
	
	let limit = 50;
	if (!returnAll) {
		limit = this.getNodeParameter('limit', index, 50) as number;
	}

	const requestMethod = 'GET';
	const endpoint = '/FieldInfo';
	const body = {};
	
	const qs: IDataObject = {};
	
	if (filters) {
		Object.assign(qs, filters);
	}
	
	if (!returnAll && limit) {
		qs.count = limit;
	}

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	
	if (Array.isArray(responseData)) {
		return responseData as IDataObject[];
	}
	
	return [responseData as IDataObject];
}