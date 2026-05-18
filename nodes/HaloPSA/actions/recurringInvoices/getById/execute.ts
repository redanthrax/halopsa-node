import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const recurringInvoiceId = this.getNodeParameter('recurringInvoiceId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/RecurringInvoice/${recurringInvoiceId}`, {}, {});

	return [{ json: response, pairedItem: { item: index } }];
}
