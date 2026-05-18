import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const businessCentralDetailId = this.getNodeParameter('businessCentralDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/BusinessCentralDetails/${businessCentralDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
