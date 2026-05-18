import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const agentImageId = this.getNodeParameter('agentImageId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/AgentImage/${agentImageId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
