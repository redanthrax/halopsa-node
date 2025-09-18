import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const id = this.getNodeParameter('id', index) as number;
	const additionalOptions = this.getNodeParameter('additionalOptions', index, {}) as IDataObject;

	const requestMethod = 'GET';
	const endpoint = `/FieldInfo/${id}`;
	const body = {};
	
	// Build query parameters from additional options
	const qs: IDataObject = {};
	
	if (additionalOptions) {
		Object.assign(qs, additionalOptions);
	}

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	
	// Return as array for consistency
	return [responseData as IDataObject];
}