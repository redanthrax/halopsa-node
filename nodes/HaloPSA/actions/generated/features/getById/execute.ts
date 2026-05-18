import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const featureId = this.getNodeParameter('featureId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Features/${featureId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
