import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const clientId = this.getNodeParameter('client_id', index) as number;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;
	
	// Build the invoice object
	const invoiceData: IDataObject = {
		client_id: clientId,
	};
	
	// Add additional fields
	Object.keys(additionalFields).forEach(key => {
		if (additionalFields[key] !== undefined && additionalFields[key] !== '' && additionalFields[key] !== 0) {
			invoiceData[key] = additionalFields[key];
		}
	});

	const requestMethod = 'POST';
	const endpoint = '/Invoice';
	
	// The API expects an array of invoices
	const body = [invoiceData];

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, {});

	// Return the created invoice(s)
	return this.helpers.returnJsonArray(responseData);
}