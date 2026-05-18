import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const remoteSessionId = this.getNodeParameter('remoteSessionId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/RemoteSession/${remoteSessionId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: remoteSessionId }, pairedItem: { item: index } }];
}
