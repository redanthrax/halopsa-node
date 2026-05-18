import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const publishProfileId = this.getNodeParameter('publishProfileId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/PublishProfiles/${publishProfileId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: publishProfileId }, pairedItem: { item: index } }];
}
