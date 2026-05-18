import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const microsoftSubscriptionMappingId = this.getNodeParameter('microsoftSubscriptionMappingId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/MicrosoftSubscriptionMapping/${microsoftSubscriptionMappingId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
