import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const quotationId = this.getNodeParameter('quotationId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Quotation/${quotationId}`, {}, {});

	return [{ json: response, pairedItem: { item: index } }];
}
