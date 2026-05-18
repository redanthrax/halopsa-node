import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const mailCampaignEmailId = this.getNodeParameter('mailCampaignEmailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/MailCampaignEmail/${mailCampaignEmailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
