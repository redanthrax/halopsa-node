import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const serviceStatuId = this.getNodeParameter('serviceStatuId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ServiceStatus/${serviceStatuId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
