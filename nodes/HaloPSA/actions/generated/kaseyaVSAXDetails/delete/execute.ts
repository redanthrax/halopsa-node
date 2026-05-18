import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const kaseyaVSAXDetailId = this.getNodeParameter('kaseyaVSAXDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/KaseyaVSAXDetails/${kaseyaVSAXDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: kaseyaVSAXDetailId }, pairedItem: { item: index } }];
}
