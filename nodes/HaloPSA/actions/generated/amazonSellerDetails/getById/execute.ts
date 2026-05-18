import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const amazonSellerDetailId = this.getNodeParameter('amazonSellerDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/AmazonSellerDetails/${amazonSellerDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
