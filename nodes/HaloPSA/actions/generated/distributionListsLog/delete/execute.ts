import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const distributionListsLogId = this.getNodeParameter('distributionListsLogId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/DistributionListsLog/${distributionListsLogId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: distributionListsLogId }, pairedItem: { item: index } }];
}
