import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	// Get required fields
	const name = this.getNodeParameter('name', index) as string;
	const client_id = this.getNodeParameter('client_id', index) as number;

	// Get additional fields collection
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const body = {
		name,
		client_id,
		...additionalFields,
	} as IDataObject;

	const requestMethod = 'POST';
	const endpoint = '/Site';

	// The API expects an array of sites
	const responseData = await apiRequest.call(this, requestMethod, endpoint, [body]);

	return this.helpers.returnJsonArray(responseData);
}