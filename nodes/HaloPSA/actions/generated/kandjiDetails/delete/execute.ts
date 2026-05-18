import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const kandjiDetailId = this.getNodeParameter('kandjiDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/KandjiDetails/${kandjiDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: kandjiDetailId }, pairedItem: { item: index } }];
}
