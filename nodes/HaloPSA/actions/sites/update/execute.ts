import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const siteId = this.getNodeParameter('id', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;

	const body = {
		id: siteId,
		...updateFields,
	} as IDataObject;

	const requestMethod = 'POST';
	const endpoint = '/Site';

	// The API expects an array of sites
	const responseData = await apiRequest.call(this, requestMethod, endpoint, [body]);

	return this.helpers.returnJsonArray(responseData);
}