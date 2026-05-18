import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const distributionListsLogId = this.getNodeParameter('distributionListsLogId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/DistributionListsLog/${distributionListsLogId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
