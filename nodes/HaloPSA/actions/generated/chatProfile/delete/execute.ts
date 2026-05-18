import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const chatProfileId = this.getNodeParameter('chatProfileId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ChatProfile/${chatProfileId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: chatProfileId }, pairedItem: { item: index } }];
}
