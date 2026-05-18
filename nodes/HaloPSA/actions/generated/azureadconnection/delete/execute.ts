import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const azureadconnectionId = this.getNodeParameter('azureadconnectionId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/azureadconnection/${azureadconnectionId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: azureadconnectionId }, pairedItem: { item: index } }];
}
