import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const wordpressDetailId = this.getNodeParameter('wordpressDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/WordpressDetails/${wordpressDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: wordpressDetailId }, pairedItem: { item: index } }];
}
