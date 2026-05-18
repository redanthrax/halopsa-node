import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const distributionListId = this.getNodeParameter('distributionListId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/DistributionLists/${distributionListId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: distributionListId }, pairedItem: { item: index } }];
}
