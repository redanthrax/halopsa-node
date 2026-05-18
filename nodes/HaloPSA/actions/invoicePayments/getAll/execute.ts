import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { runGetAllRequest } from '../../../getAllHelpers';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const clientId = this.getNodeParameter('clientId', index, 0) as number;
	const invoiceId = this.getNodeParameter('invoiceId', index, 0) as number;
	const search = this.getNodeParameter('search', index, '') as string;
	const intentId = this.getNodeParameter('intentId', index, '') as string;

	const qs: IDataObject = {};
	if (clientId > 0) qs.client_id = clientId;
	if (invoiceId > 0) qs.invoice_id = invoiceId;
	if (search) qs.search = search;
	if (intentId) qs.intent_id = intentId;

	return runGetAllRequest.call(this, index, {
		endpoint: '/InvoicePayment',
		resourceKey: 'invoicepayments',
		qs,
		maxLimit: 100,
	});
}
