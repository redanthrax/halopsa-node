import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const avalaraDetailId = this.getNodeParameter('avalaraDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/AvalaraDetails/${avalaraDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: avalaraDetailId }, pairedItem: { item: index } }];
}
