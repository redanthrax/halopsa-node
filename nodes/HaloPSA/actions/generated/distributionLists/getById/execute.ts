import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const distributionListId = this.getNodeParameter('distributionListId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/DistributionLists/${distributionListId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
