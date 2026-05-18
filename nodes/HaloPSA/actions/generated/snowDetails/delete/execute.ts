import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const snowDetailId = this.getNodeParameter('snowDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/SnowDetails/${snowDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: snowDetailId }, pairedItem: { item: index } }];
}
