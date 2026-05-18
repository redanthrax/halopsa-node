import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ingramMicroResellerDetailId = this.getNodeParameter('ingramMicroResellerDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/IngramMicroResellerDetails/${ingramMicroResellerDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
