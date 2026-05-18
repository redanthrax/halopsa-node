import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const kashflowDetailId = this.getNodeParameter('kashflowDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/KashflowDetails/${kashflowDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
