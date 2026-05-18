import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const mailCampaignLogId = this.getNodeParameter('mailCampaignLogId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/MailCampaignLog/${mailCampaignLogId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
