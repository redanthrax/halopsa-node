import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const opportunityId = this.getNodeParameter('opportunityId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Opportunities/${opportunityId}`, {}, {});

	return [{ json: response, pairedItem: { item: index } }];
}
