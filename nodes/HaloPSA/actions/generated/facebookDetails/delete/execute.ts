import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const facebookDetailId = this.getNodeParameter('facebookDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/FacebookDetails/${facebookDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: facebookDetailId }, pairedItem: { item: index } }];
}
