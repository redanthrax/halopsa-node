import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const integrationErrorId = this.getNodeParameter('integrationErrorId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/IntegrationError/${integrationErrorId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: integrationErrorId }, pairedItem: { item: index } }];
}
