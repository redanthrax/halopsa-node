import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const pRTGDetailId = this.getNodeParameter('pRTGDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/PRTGDetails/${pRTGDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
