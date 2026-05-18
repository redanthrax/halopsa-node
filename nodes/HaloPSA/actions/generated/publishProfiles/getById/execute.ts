import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const publishProfileId = this.getNodeParameter('publishProfileId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/PublishProfiles/${publishProfileId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
