import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const serviceCategoryId = this.getNodeParameter('serviceCategoryId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ServiceCategory/${serviceCategoryId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
