import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const twitterDetailId = this.getNodeParameter('twitterDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/TwitterDetails/${twitterDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: twitterDetailId }, pairedItem: { item: index } }];
}
