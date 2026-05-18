import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const slackDetailId = this.getNodeParameter('slackDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/SlackDetails/${slackDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: slackDetailId }, pairedItem: { item: index } }];
}
