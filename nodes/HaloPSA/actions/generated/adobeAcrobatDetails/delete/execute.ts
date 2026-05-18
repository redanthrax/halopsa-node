import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const adobeAcrobatDetailId = this.getNodeParameter('adobeAcrobatDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/AdobeAcrobatDetails/${adobeAcrobatDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: adobeAcrobatDetailId }, pairedItem: { item: index } }];
}
