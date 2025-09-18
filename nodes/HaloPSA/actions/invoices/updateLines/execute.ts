import { IExecuteFunctions } from 'n8n-workflow';
import { INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const invoiceLines = this.getNodeParameter('invoiceLines', index) as string;
	
	let parsedLines;
	try {
		parsedLines = JSON.parse(invoiceLines);
	} catch (error) {
		throw new Error('Invalid JSON format for invoice lines');
	}

	const requestMethod = 'POST';
	const endpoint = '/Invoice/updatelines';
	const body = parsedLines;

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, {});

	return this.helpers.returnJsonArray(responseData);
}