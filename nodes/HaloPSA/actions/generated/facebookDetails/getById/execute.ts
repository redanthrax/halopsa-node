import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const facebookDetailId = this.getNodeParameter('facebookDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/FacebookDetails/${facebookDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
