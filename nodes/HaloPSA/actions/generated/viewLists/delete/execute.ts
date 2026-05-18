import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const viewListId = this.getNodeParameter('viewListId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ViewLists/${viewListId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: viewListId }, pairedItem: { item: index } }];
}
