import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const mailCampaignId = this.getNodeParameter('mailCampaignId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/MailCampaign/${mailCampaignId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: mailCampaignId }, pairedItem: { item: index } }];
}
