import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const consignmentId = this.getNodeParameter('consignmentId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Consignment/${consignmentId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
