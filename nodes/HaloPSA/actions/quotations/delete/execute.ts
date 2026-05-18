import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const quotationId = this.getNodeParameter('quotationId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Quotation/${quotationId}`, {}, {});

	return [{
		json: (response as IDataObject) || { success: true, id: quotationId },
		pairedItem: { item: index },
	}];
}
