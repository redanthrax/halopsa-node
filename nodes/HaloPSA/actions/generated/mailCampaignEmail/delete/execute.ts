import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const mailCampaignEmailId = this.getNodeParameter('mailCampaignEmailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/MailCampaignEmail/${mailCampaignEmailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: mailCampaignEmailId }, pairedItem: { item: index } }];
}
