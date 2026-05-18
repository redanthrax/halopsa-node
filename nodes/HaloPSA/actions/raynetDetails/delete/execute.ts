import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const detailId = this.getNodeParameter('detailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/RaynetDetails/${detailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: detailId }, pairedItem: { item: index } }];
}
