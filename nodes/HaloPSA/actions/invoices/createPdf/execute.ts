import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const invoiceId = this.getNodeParameter('invoiceId', index) as number;
	const response = await apiRequest.call(this, 'POST', `/Invoice/PDF/${invoiceId}`, {}, {});

	return [{ json: (response ?? { invoiceId }) as IDataObject, pairedItem: { item: index } }];
}
