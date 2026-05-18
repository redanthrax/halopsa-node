import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const googleBusinessDetailId = this.getNodeParameter('googleBusinessDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/GoogleBusinessDetails/${googleBusinessDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
