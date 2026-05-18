import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const twilioWhatsAppDetailId = this.getNodeParameter('twilioWhatsAppDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/TwilioWhatsAppDetails/${twilioWhatsAppDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
