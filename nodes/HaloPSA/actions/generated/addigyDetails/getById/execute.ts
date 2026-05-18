import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const addigyDetailId = this.getNodeParameter('addigyDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/AddigyDetails/${addigyDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
