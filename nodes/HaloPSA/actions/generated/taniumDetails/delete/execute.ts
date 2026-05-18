import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const taniumDetailId = this.getNodeParameter('taniumDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/TaniumDetails/${taniumDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: taniumDetailId }, pairedItem: { item: index } }];
}
