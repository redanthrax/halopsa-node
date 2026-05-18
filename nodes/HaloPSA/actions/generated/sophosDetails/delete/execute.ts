import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const sophosDetailId = this.getNodeParameter('sophosDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/SophosDetails/${sophosDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: sophosDetailId }, pairedItem: { item: index } }];
}
