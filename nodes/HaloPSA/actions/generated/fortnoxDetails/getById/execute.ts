import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const fortnoxDetailId = this.getNodeParameter('fortnoxDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/FortnoxDetails/${fortnoxDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
