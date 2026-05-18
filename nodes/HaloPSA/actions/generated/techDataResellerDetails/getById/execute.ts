import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const techDataResellerDetailId = this.getNodeParameter('techDataResellerDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/TechDataResellerDetails/${techDataResellerDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
