import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const recurringInvoiceId = this.getNodeParameter('recurringInvoiceId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/RecurringInvoice/${recurringInvoiceId}`, {}, {});

	return [{
		json: (response as IDataObject) || { success: true, id: recurringInvoiceId },
		pairedItem: { item: index },
	}];
}
