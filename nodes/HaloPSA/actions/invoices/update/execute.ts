import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const invoiceId = this.getNodeParameter('invoiceId', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;
	
	const invoiceData: IDataObject = {
		id: invoiceId,
	};
	
	Object.keys(updateFields).forEach(key => {
		if (updateFields[key] !== undefined && updateFields[key] !== '') {
			invoiceData[key] = updateFields[key];
		}
	});

	const requestMethod = 'POST';
	const endpoint = '/Invoice';
	
	const body = [invoiceData];

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, {});

	return this.helpers.returnJsonArray(responseData);
}