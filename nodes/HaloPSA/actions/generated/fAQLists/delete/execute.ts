import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const fAQListId = this.getNodeParameter('fAQListId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/FAQLists/${fAQListId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: fAQListId }, pairedItem: { item: index } }];
}
