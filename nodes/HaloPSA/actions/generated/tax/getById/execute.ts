import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const taxId = this.getNodeParameter('taxId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Tax/${taxId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
