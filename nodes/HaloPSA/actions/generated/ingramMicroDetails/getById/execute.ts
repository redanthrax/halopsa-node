import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ingramMicroDetailId = this.getNodeParameter('ingramMicroDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/IngramMicroDetails/${ingramMicroDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
