import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const cABId = this.getNodeParameter('cABId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/CAB/${cABId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
