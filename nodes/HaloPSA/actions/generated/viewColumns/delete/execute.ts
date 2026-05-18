import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const viewColumnId = this.getNodeParameter('viewColumnId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ViewColumns/${viewColumnId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: viewColumnId }, pairedItem: { item: index } }];
}
