import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const dattoCommerceDetailId = this.getNodeParameter('dattoCommerceDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/DattoCommerceDetails/${dattoCommerceDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: dattoCommerceDetailId }, pairedItem: { item: index } }];
}
