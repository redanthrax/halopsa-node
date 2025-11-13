import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', index) as string;
	const clientIdParam = this.getNodeParameter('client_id', index);
	const client_id = typeof clientIdParam === 'string' ? parseInt(clientIdParam, 10) : (clientIdParam as number);

	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const body = {
		name,
		client_id,
		...additionalFields,
	} as IDataObject;

	const requestMethod = 'POST';
	const endpoint = '/Site';

	const responseData = await apiRequest.call(this, requestMethod, endpoint, [body]);

	return this.helpers.returnJsonArray(responseData);
}