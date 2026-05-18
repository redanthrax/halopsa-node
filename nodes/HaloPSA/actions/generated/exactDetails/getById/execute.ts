import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const exactDetailId = this.getNodeParameter('exactDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ExactDetails/${exactDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
