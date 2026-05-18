import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const pax8DetailId = this.getNodeParameter('pax8DetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Pax8Details/${pax8DetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
