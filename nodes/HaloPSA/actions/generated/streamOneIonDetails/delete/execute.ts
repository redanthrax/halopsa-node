import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const streamOneIonDetailId = this.getNodeParameter('streamOneIonDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/StreamOneIonDetails/${streamOneIonDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: streamOneIonDetailId }, pairedItem: { item: index } }];
}
