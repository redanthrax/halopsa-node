import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentCheckInId = this.getNodeParameter('agentCheckInId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/AgentCheckIn/${agentCheckInId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
