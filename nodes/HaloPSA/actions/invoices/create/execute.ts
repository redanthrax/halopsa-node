import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const clientIdParam = this.getNodeParameter('client_id', index);
	const clientId = typeof clientIdParam === 'string' ? parseInt(clientIdParam, 10) : (clientIdParam as number);
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;
	
	const invoiceData: IDataObject = {
		client_id: clientId,
	};
	
	Object.keys(additionalFields).forEach(key => {
		if (additionalFields[key] !== undefined && additionalFields[key] !== '' && additionalFields[key] !== 0) {
			invoiceData[key] = additionalFields[key];
		}
	});

	const requestMethod = 'POST';
	const endpoint = '/Invoice';
	
	const body = [invoiceData];

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, {});

	return this.helpers.returnJsonArray(responseData);
}