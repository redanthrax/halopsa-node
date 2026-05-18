import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const customIntegrationId = this.getNodeParameter('customIntegrationId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/CustomIntegration/${customIntegrationId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: customIntegrationId }, pairedItem: { item: index } }];
}
