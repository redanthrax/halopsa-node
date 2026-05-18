import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const connectedInstanceId = this.getNodeParameter('connectedInstanceId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ConnectedInstance/${connectedInstanceId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: connectedInstanceId }, pairedItem: { item: index } }];
}
