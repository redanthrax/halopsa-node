import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const integrationRequestId = this.getNodeParameter('integrationRequestId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/IntegrationRequest/${integrationRequestId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: integrationRequestId }, pairedItem: { item: index } }];
}
