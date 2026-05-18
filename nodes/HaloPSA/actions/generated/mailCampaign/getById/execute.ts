import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const mailCampaignId = this.getNodeParameter('mailCampaignId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/MailCampaign/${mailCampaignId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
