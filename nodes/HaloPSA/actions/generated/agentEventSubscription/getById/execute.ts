import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentEventSubscriptionId = this.getNodeParameter('agentEventSubscriptionId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/AgentEventSubscription/${agentEventSubscriptionId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
