import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const googleBusinessDetailId = this.getNodeParameter('googleBusinessDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/GoogleBusinessDetails/${googleBusinessDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: googleBusinessDetailId }, pairedItem: { item: index } }];
}
