import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const dynamics365CRMDetailId = this.getNodeParameter('dynamics365CRMDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Dynamics365CRMDetails/${dynamics365CRMDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
