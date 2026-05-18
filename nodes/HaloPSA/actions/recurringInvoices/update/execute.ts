import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const recurringInvoiceId = this.getNodeParameter('recurringInvoiceId', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;

	const body = [{ id: recurringInvoiceId, ...updateFields }];
	const response = await apiRequest.call(this, 'POST', '/RecurringInvoice', body, {});
	const record = Array.isArray(response) ? response[0] : response;

	return [{ json: record as IDataObject, pairedItem: { item: index } }];
}
