import { GenericValue, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { nodeApiError } from '../../../errors';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const quotationLines = this.getNodeParameter('quotationLines', index) as string;

	let parsedLines: unknown;
	try {
		parsedLines = JSON.parse(quotationLines);
	} catch {
		throw nodeApiError(this, 'Invalid JSON format for quotation lines');
	}

	const responseData = await apiRequest.call(
		this,
		'POST',
		'/Quotation/Lines',
		parsedLines as GenericValue[],
		{},
	);

	return this.helpers.returnJsonArray(responseData);
}
