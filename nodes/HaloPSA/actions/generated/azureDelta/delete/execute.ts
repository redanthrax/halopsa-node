import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const azureDeltaId = this.getNodeParameter('azureDeltaId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/AzureDelta/${azureDeltaId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: azureDeltaId }, pairedItem: { item: index } }];
}
