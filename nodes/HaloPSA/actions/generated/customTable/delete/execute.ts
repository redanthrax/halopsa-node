import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const customTableId = this.getNodeParameter('customTableId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/CustomTable/${customTableId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: customTableId }, pairedItem: { item: index } }];
}
