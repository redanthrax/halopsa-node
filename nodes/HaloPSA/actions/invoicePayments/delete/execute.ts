import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const invoicePaymentId = this.getNodeParameter('invoicePaymentId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/InvoicePayment/${invoicePaymentId}`, {}, {});

	return [{
		json: (response as IDataObject) || { success: true, id: invoicePaymentId },
		pairedItem: { item: index },
	}];
}
