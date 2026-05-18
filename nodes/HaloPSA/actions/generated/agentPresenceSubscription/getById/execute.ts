import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentPresenceSubscriptionId = this.getNodeParameter('agentPresenceSubscriptionId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/AgentPresenceSubscription/${agentPresenceSubscriptionId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
