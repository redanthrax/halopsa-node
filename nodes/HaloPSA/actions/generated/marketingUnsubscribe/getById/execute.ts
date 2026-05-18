import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const marketingUnsubscribeId = this.getNodeParameter('marketingUnsubscribeId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/MarketingUnsubscribe/${marketingUnsubscribeId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
