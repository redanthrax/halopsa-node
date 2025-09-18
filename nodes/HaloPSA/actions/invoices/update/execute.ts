import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const invoiceId = this.getNodeParameter('invoiceId', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;
	
	// Build the invoice object with ID
	const invoiceData: IDataObject = {
		id: invoiceId,
	};
	
	// Add update fields
	Object.keys(updateFields).forEach(key => {
		if (updateFields[key] !== undefined && updateFields[key] !== '' && updateFields[key] !== 0) {
			invoiceData[key] = updateFields[key];
		}
	});

	const requestMethod = 'POST';
	const endpoint = '/Invoice';
	
	// The API expects an array of invoices for update
	const body = [invoiceData];

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, {});

	// Return the updated invoice(s)
	return this.helpers.returnJsonArray(responseData);
}