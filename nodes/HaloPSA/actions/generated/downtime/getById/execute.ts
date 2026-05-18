import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const downtimeId = this.getNodeParameter('downtimeId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Downtime/${downtimeId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
