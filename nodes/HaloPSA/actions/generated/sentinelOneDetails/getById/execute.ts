import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const sentinelOneDetailId = this.getNodeParameter('sentinelOneDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/SentinelOneDetails/${sentinelOneDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
