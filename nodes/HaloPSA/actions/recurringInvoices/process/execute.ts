import { GenericValue, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const recurringInvoiceIds = this.getNodeParameter('recurringInvoiceIds', index) as string;

	let ids: unknown;
	try {
		ids = JSON.parse(recurringInvoiceIds);
	} catch {
		throw new Error('Invalid JSON format for recurring invoice IDs');
	}

	if (!Array.isArray(ids)) {
		throw new Error('Recurring invoice IDs must be a JSON array of integers');
	}

	const responseData = await apiRequest.call(
		this,
		'POST',
		'/RecurringInvoice/process',
		ids as GenericValue[],
		{},
	);

	return this.helpers.returnJsonArray(
		Array.isArray(responseData) ? responseData : [responseData],
	);
}
