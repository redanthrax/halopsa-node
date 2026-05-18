import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const categoryId = this.getNodeParameter('categoryId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Category/${categoryId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: categoryId }, pairedItem: { item: index } }];
}
