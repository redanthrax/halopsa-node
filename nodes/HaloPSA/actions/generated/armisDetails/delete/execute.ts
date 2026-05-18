import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const armisDetailId = this.getNodeParameter('armisDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ArmisDetails/${armisDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: armisDetailId }, pairedItem: { item: index } }];
}
