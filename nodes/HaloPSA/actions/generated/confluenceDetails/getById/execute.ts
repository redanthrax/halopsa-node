import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const confluenceDetailId = this.getNodeParameter('confluenceDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ConfluenceDetails/${confluenceDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
