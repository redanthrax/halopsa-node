import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const mattermostDetailId = this.getNodeParameter('mattermostDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/MattermostDetails/${mattermostDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
