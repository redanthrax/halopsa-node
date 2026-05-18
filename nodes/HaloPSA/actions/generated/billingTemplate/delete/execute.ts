import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const billingTemplateId = this.getNodeParameter('billingTemplateId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/BillingTemplate/${billingTemplateId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: billingTemplateId }, pairedItem: { item: index } }];
}
