import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const snipeITDetailId = this.getNodeParameter('snipeITDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/SnipeITDetails/${snipeITDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: snipeITDetailId }, pairedItem: { item: index } }];
}
