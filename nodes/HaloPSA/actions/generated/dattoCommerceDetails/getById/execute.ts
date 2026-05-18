import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const dattoCommerceDetailId = this.getNodeParameter('dattoCommerceDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/DattoCommerceDetails/${dattoCommerceDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
