import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const emailStoreId = this.getNodeParameter('emailStoreId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/EmailStore/${emailStoreId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: emailStoreId }, pairedItem: { item: index } }];
}
