import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const quickBooksDetailId = this.getNodeParameter('quickBooksDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/QuickBooksDetails/${quickBooksDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: quickBooksDetailId }, pairedItem: { item: index } }];
}
