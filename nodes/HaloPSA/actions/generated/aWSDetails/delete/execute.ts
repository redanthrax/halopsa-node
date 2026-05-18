import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const aWSDetailId = this.getNodeParameter('aWSDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/AWSDetails/${aWSDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: aWSDetailId }, pairedItem: { item: index } }];
}
