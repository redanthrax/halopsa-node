import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const azureDevOpsDetailId = this.getNodeParameter('azureDevOpsDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/AzureDevOpsDetails/${azureDevOpsDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
