import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const twilioWhatsAppDetailId = this.getNodeParameter('twilioWhatsAppDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/TwilioWhatsAppDetails/${twilioWhatsAppDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: twilioWhatsAppDetailId }, pairedItem: { item: index } }];
}
