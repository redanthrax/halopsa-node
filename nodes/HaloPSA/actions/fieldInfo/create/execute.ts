import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const fieldInfoData = this.getNodeParameter('fieldInfoData', index) as string;

	const requestMethod = 'POST';
	const endpoint = '/FieldInfo';
	const body = [JSON.parse(fieldInfoData)];
	const qs = {};

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	
	// If it's already an array, return it directly
	if (Array.isArray(responseData)) {
		return responseData as IDataObject[];
	}
	
	// Otherwise, wrap in array
	return [responseData as IDataObject];
}