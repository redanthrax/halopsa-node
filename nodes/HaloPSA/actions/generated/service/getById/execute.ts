import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const serviceId = this.getNodeParameter('serviceId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Service/${serviceId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
