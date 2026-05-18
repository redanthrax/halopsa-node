import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ingramMicroDetailId = this.getNodeParameter('ingramMicroDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/IngramMicroDetails/${ingramMicroDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: ingramMicroDetailId }, pairedItem: { item: index } }];
}
