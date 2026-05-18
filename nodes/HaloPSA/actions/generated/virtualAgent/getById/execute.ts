import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const virtualAgentId = this.getNodeParameter('virtualAgentId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/VirtualAgent/${virtualAgentId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
