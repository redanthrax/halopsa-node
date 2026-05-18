import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const twitterDetailId = this.getNodeParameter('twitterDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/TwitterDetails/${twitterDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
